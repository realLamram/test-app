import EditIcon from "@mui/icons-material/Edit";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ReactElement } from "react";
import { AstronautsDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData } from "../../App/hooks";
import { ResponsiveButton } from "../../ui/Button";
import { Link } from "../../ui/Link";
import { List } from "../../ui/List";
import { Astronaut } from "../../../api";

export default function Astronauts(): ReactElement {
  const { data } = useData<Astronaut>({ doc: AstronautsDocument });

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
