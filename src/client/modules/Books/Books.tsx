import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../api";
import { BooksDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useBreakPoints, useData } from "../../App/hooks";
import { useUser } from "../../context";
import { IconBtn, ResponsiveButton } from "../../ui/Button";
import { FormatStack, FormatString } from "../../ui/Format";
import { Link } from "../../ui/Link";
import { List } from "../../ui/List";
import { UserRole } from "../../utils";
import ListItemAction from "./ListItemAction";
import { Spinner } from "../../ui/Spinner";
import { Fulltext } from "../../ui/Fulltext";

export default function Books(): ReactElement {
  const { down450 } = useBreakPoints();
  const [searchBook, setSearchBook] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const { data, fetching } = useData<Book>({
    doc: BooksDocument,
    variables: { search: { title: searchBook, author: searchAuthor } },
  });
  const [books, setBooks] = useState([]);
  const { userRole, customerView, setCustomerView } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (customerView) {
      navigate("/books/customerview");
    }
  }, []);

  const can = () => userRole === UserRole.ADMIN;

  useEffect(() => {
    const d = data?.books?.map((book: any) => {
      const data = {
        ...book.author,
        idAuthor: book.author.id,
        ...book,
      };
      delete data.author;
      return data;
    });
    setBooks(d);
  }, [data]);

  return (
    <Box>
      <Card>
        <CardHeader
          title={translate("Books")}
          action={
            <>
              <Stack spacing={2} direction="row">
                {can() && (
                  <Link url="create">
                    <ResponsiveButton variant="outlined" icon={<EditIcon />}>
                      {translate("create")}
                    </ResponsiveButton>
                  </Link>
                )}
                <Link url="customerview">
                  <IconBtn
                    sx={{
                      backgroundColor: yellow[300],
                      ":hover": {
                        backgroundColor: yellow[500],
                      },
                    }}
                    onClick={() => setCustomerView(!customerView)}
                  >
                    <VisibilityIcon />
                  </IconBtn>
                </Link>
              </Stack>
            </>
          }
        />
        <CardContent>
          <Stack direction={down450 ? "column" : "row"} sx={{ width: "100%" }} spacing={2}>
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
          {fetching ? (
            <Box
              sx={{
                width: "100%",
                minHeight: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner />
            </Box>
          ) : (
            <List
              listItemAction={<ListItemAction />}
              primary={
                <FormatStack
                  fields={[
                    {
                      name: "title",
                      heading: "title",
                      props: { variant: "h6", component: "span" },
                    },
                    "released",
                  ]}
                />
              }
              secondary={<FormatString fields={["name", "surName"]} />}
              data={books}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
