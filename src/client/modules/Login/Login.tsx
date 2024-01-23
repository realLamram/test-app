import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { UserRole } from "@prisma/client";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router";
import { DeleteTodoDocument, Todo, TodosDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useUser } from "../../App/User";
import { useData, useMutation } from "../../App/hooks";
import { ResponsiveButton } from "../../ui/Button";
import { Link } from "../../ui/Link";

const Item = (props: { id: string; title: string }) => {
  const { id, title } = props;
  const { execDelete } = useMutation(DeleteTodoDocument);

  return (
    <ListItem dense divider>
      <ListItemText primary={title} />
      <Stack direction="row">
        <Link url={`edit/${id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => execDelete({ id })}>
          <ClearIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default function Login(): ReactElement {
  const { user, can, setUser } = useUser();
  const { data } = useData<Todo>({ doc: TodosDocument, variables: { where: { userId: user.id } } });
  const navigate = useNavigate();

  useEffect(() => {
    if (!can([UserRole.ADMIN, UserRole.USER])) {
      navigate("/");
      setUser(null);
    }
  }, []);

  return (
    <Card>
      <CardHeader
        title={`Login module - user ${user.fullName}`}
        action={
          <Link url="create">
            <ResponsiveButton icon={<AddIcon />}>{translate("add")}</ResponsiveButton>
          </Link>
        }
      />
      <CardContent>
        <List sx={{ maxWidth: 600 }} dense>
          {data?.todos?.map((todo: Todo, idx: number) => (
            <Item key={idx} id={todo.id} title={todo.title} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
