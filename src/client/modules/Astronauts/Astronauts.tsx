import EditIcon from "@mui/icons-material/Edit";
import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import { AstronautsDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData } from "../../App/hooks";
import { ResponsiveButton } from "../../ui/Button";
import { Link } from "../../ui/Link";
import { List } from "../../ui/List";
import { Astronaut } from "../../../api";
import { Fulltext } from "../../ui/Fulltext";

export default function Astronauts(): ReactElement {
  const [search, setSearch] = useState<string>("");
  const { data } = useData<Astronaut>({ doc: AstronautsDocument, variables: { search } });

  return (
    <Box>
      <Card>
        <CardHeader
          title={translate("Astronauts")}
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
            secondary={["birth", "skill", "hair", "eyes"]}
            data={data?.astronauts}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
