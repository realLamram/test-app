import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Book, BooksDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useBreakPoints, useData } from "../../App/hooks";
import { useUser } from "../../context";
import { IconBtn } from "../../ui/Button";
import { Fulltext } from "../../ui/Fulltext";
import { Grid } from "../../ui/Grid";
import BookCard from "./BookCard";
import { Spinner } from "../../ui/Spinner";

export default function CustomerView(): ReactElement {
  const { down450 } = useBreakPoints();
  const [searchBook, setSearchBook] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const { data, fetching } = useData<Book>({
    doc: BooksDocument,
    variables: { search: { title: searchBook, author: searchAuthor } },
  });

  const { customerView, setCustomerView } = useUser();

  return (
    <Card>
      <CardHeader
        disableTypography
        title={
          <Stack direction={down450 ? "column" : "row"} sx={{ width: "90%" }} spacing={2}>
            <Fulltext
              placeHolder={translate("searchBook")}
              value={searchBook}
              onChange={(e: string) => setSearchBook(e)}
            />
            <Fulltext
              placeHolder={translate("searchAuthor")}
              value={searchAuthor}
              onChange={(e: string) => setSearchAuthor(e)}
            />
          </Stack>
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
        {!fetching ? (
          <Grid gap={2} xl={4} lg={3} md={2} sm={2}>
            {data?.books?.map((book: Book) => <BookCard key={book.id} book={book} />)}
          </Grid>
        ) : (
          <Box sx={{ width: "100%" }}>
            <Spinner />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
