import { ReactElement } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { IconBtn } from "../../ui/Button";
import { yellow } from "@mui/material/colors";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { translate } from "../../../i18n/utils";
import { useData } from "../../App/hooks";
import { Book, BooksDocument } from "../../../api/gql/graphql";
import BookCard from "./BookCard";
import { Grid } from "../../ui/Grid";
import { useUser } from "../../context";

export default function CustomerView(): ReactElement {
  const { data } = useData<Book>({ doc: BooksDocument });
  const { customerView, setCustomerView } = useUser();

  return (
    <Card>
      <CardHeader
        disableTypography
        title={
          <Box
            sx={{
              borderRadius: "3px",
              backgroundColor: yellow[200],
              // width: "fit-content",
              py: 1,
              width: "90%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5"> {translate("Books")}</Typography>
          </Box>
        }
        action={
          <Link to={"/books"}>
            <IconBtn
              sx={{
                backgroundColor: yellow[300],
                ":hover": {
                  backgroundColor: yellow[500],
                },
              }}
              onClick={() => setCustomerView(!customerView)}
            >
              <VisibilityOffIcon />
            </IconBtn>
          </Link>
        }
      />

      <CardContent>
        <Grid gap={2} xl={4} lg={3} md={2} sm={2}>
          {data?.books?.map((book: Book) => <BookCard key={book.id} book={book} />)}
        </Grid>
      </CardContent>
    </Card>
  );
}
