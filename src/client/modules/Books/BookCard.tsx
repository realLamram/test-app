import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Book } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useBreakPoints } from "../../App/hooks";
import { url } from "../../..";

export default function BookCard(props: { book: Book }): ReactElement {
  const { author, title, released, files } = props.book;
  const path = files?.[0]?.path;

  const { down450 } = useBreakPoints();

  const randomNumber = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

  return (
    <Card
      sx={{
        backgroundImage: "linear-gradient(to bottom right, #FDFCFB, #E2D1C3)",
      }}
    >
      <CardHeader
        disableTypography
        title={
          <Typography variant="h5" sx={{ fontFamily: "Lucida Console", letterSpacing: 1 }}>
            {title}
          </Typography>
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Stack direction={down450 ? "column" : "row"} spacing={2}>
          <Box sx={{ maxWidth: 150, maxHeight: 300 }}>
            {path ? (
              <img src={`${url}/${path}`} alt="cover" width="100%" height="auto" />
            ) : (
              <img src={`${url}/closedBook.jpeg`} alt="cover" width="100%" height="auto" />
            )}
          </Box>
          <Stack direction="column" spacing={2}>
            <Stack direction="column">
              <Typography variant="subtitle2" fontSize={12}>
                {translate("author")}
              </Typography>
              <Typography> {author.name + " " + author.surName} </Typography>
            </Stack>
            <Stack spacing={down450 ? 3 : 1} direction={down450 ? "row" : "column"}>
              <Stack direction="column">
                <Typography variant="subtitle2" fontSize={12}>
                  {translate("price")}
                </Typography>
                <Typography>{randomNumber} Kč</Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="subtitle2" fontSize={12}>
                  {translate("released")}
                </Typography>
                <Typography>{released} </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
