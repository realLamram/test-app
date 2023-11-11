import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ReactElement } from "react";
import { EmployeesDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData } from "../../App/hooks";
import { ResponsiveButton } from "../../ui/Button";
import { Link } from "../../ui/Link";
import { List } from "../../ui/List";
import EditIcon from "@mui/icons-material/Edit";
import { Employee } from "../../../api";

export default function Employees(): ReactElement {
  const { data } = useData<Employee>({ doc: EmployeesDocument });

  return (
    <Box>
      <Card>
        <CardHeader
          title={translate("Employees")}
          action={
            <Link url="create">
              <ResponsiveButton variant="outlined" icon={<EditIcon />}>
                {translate("create")}
              </ResponsiveButton>
            </Link>
          }
        />
        <CardContent>
          <List
            primary={["name", "surName"]}
            secondary={["birth", "skill"]}
            data={data?.employees}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
