import { Autocomplete, Box, Card, CardContent, CardHeader, Stack, TextField } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { EmployeesDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData } from "../../App/hooks";
import { ResponsiveButton } from "../../ui/Button";
import { Link } from "../../ui/Link";
import { List } from "../../ui/List";
import EditIcon from "@mui/icons-material/Edit";
import { Employee } from "../../../api";
import { Fulltext } from "../../ui/Fulltext";

export default function Employees(): ReactElement {
  const [search, setSearch] = useState<string>("");
  const { data } = useData<Employee>({ doc: EmployeesDocument, variables: { search } });

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
          <Stack direction="row" sx={{ width: "100%" }}>
            <Fulltext sx={{ width: 500 }} value={search} onChange={(e: string) => setSearch(e)} />
          </Stack>
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
