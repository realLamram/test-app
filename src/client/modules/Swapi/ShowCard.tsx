import { Box, Card, CardContent, ListItem, Skeleton, Stack, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Character, CharacterDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData } from "../../App/hooks";
import { useToast } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import Item from "./Item";

export default function ShowCard(): ReactElement {
  const { characterId } = useParams();
  const { setOpenToast, setSeverity, setToastMessage } = useToast();

  const { data, fetching, error } = useData<Character>({
    doc: CharacterDocument,
    variables: { id: characterId },
  });

  const character = data?.character;
  const { name, gender, birth_year, eye_color, skin_color } = character || {};

  useEffect(() => {
    if (error) {
      setOpenToast(true);
      setSeverity(Severity.Error);
      setToastMessage(translate("server_error"));
    }
  }, [error, data]);

  const Row = (item: { [key: string]: { [name: string]: string } }): ReactElement => {
    const value = Object.values(item)[0];
    const val = Object.values(value)[0];
    return (
      <div style={{ marginBottom: 7 }}>
        <Item title={translate(Object.keys(value)[0])} text={val} />
      </div>
    );
  };

  return (
    <Card sx={{ maxWidth: 900, backgroundColor: "#FFFFF5" }}>
      <CardContent>
        {fetching ? (
          <Stack>
            {Array.from({ length: 5 }, (_, index) => (
              <ListItem>
                <Skeleton animation="wave" key={index} variant="rounded" width={300} height={40} />
              </ListItem>
            ))}
          </Stack>
        ) : (
          <Stack>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Box style={{ padding: 5 }}>
              <Row item={{ gender }} />
              <Row item={{ birth_year }} />
              <Row item={{ eye_color }} />
              <Row item={{ skin_color }} />
            </Box>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
