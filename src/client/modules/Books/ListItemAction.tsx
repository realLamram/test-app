import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "urql";
import { Book } from "../../../api";
import { DeleteBookDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useUser, useDataContext } from "../../context";
import { ConfirmButton } from "../../ui/Dialog";
import { UserRole } from "../../utils";

export default function ListItemAction(): ReactElement {
  const { data } = useDataContext<Book>();
  const url = `${data.id}/edit`;
  const { userRole } = useUser();

  const can = () => userRole === UserRole.ADMIN;

  const [result, executeDelete] = useMutation(DeleteBookDocument);

  const deleteBook = () => {
    executeDelete({
      id: data.id,
      path: data.files?.[0]?.path,
    });
  };

  return (
    <Stack direction="row">
      <Link to={url} style={{ textDecoration: "none", padding: 0 }}>
        <Tooltip title={translate("edit")}>
          <IconButton sx={{ height: 40 }}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Link>
      {can() && (
        <ConfirmButton
          dialogTitle={translate("dialog_delete", { data: `titul ${data.title}` })}
          icon={<DeleteIcon />}
          sx={{ height: 40 }}
          onClick={deleteBook}
          toolTipTitle={translate("delete")}
        />
      )}
    </Stack>
  );
}
