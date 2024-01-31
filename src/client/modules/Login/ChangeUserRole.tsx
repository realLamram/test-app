import {
  Card,
  CardContent,
  CardHeader,
  Autocomplete as MuiAutocomplete,
  TextField,
} from "@mui/material";
import { ReactElement } from "react";
import { User } from "../../../api";
import { RoleType, UserRoleUpdateDocument, UsersDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData, useMutation } from "../../App/hooks";
import { ChipUser } from "../../ui/Chip";
import { userRoleUpdate } from "../../../validation/schema/User";

const Autocomplete = (props: { data: any }) => {
  const { data = [] } = props;

  const { execMutation: updateUserRole } = useMutation(UserRoleUpdateDocument);

  const extendedData = (
    data?.filter((user: User) => !user.roles.includes(RoleType.Admin)) || []
  ).map((user: User) => ({
    ...user,
    label: user.fullName,
    value: user.id,
  }));

  const handleChange = (e: any, value: any | null) => {
    if (value) {
      console.log(value);
      updateUserRole(userRoleUpdate, { input: { id: value.id, role: RoleType.Admin } });
    }
  };

  return (
    <MuiAutocomplete
      autoHighlight
      blurOnSelect
      clearOnBlur
      clearOnEscape
      value={null}
      options={extendedData}
      // isOptionEqualToValue={(option: User, value: User) => option?.id === value?.id}
      onChange={handleChange}
      // filterOptions={(options, state) => {}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label={translate("add")} />}
    />
  );
};

export default function ChangeUserRole(): ReactElement {
  const { data } = useData<User>({ doc: UsersDocument });

  // useEffect(() => {
  //   console.log(data?.users?.filter((user: User) => user.roles.includes(RoleType.Admin)) || []);
  // }, [data]);

  return (
    <Card>
      <CardHeader title={translate("changeUserRole")} />
      <CardContent>
        <Card>
          <CardHeader title={translate("admin")} action={<Autocomplete data={data?.users} />} />
          <CardContent>
            {data?.users
              ?.filter((user: User) => user.roles.includes(RoleType.Admin))
              .map((user: User) => {
                return (
                  <ChipUser key={user.id} name={user.name} surName={user.surName} sx={{ m: 0.5 }} />
                );
              })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader title={translate("user")} />
          <CardContent>
            {data?.users
              ?.filter((user: User) => user.roles.includes(RoleType.User))
              .map((user: User) => {
                return (
                  <ChipUser key={user.id} name={user.name} surName={user.surName} sx={{ m: 0.5 }} />
                );
              })}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
