import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { ReactElement, ReactNode, useRef } from "react";
import { translate } from "../../../i18n/utils";

export type ConfirmDialogProps = Omit<DialogProps, "content" | "onClose" | "title"> & {
  title?: ReactNode;
  onClose?: (event: object, reason: "escapeKeyDown" | "backdropClick" | "escapeButton") => void;
  onSubmit: (e: any) => void;
};

export default function ConfirmDialog(props: ConfirmDialogProps): ReactElement | null {
  const { children, title, onSubmit, ...other } = props;
  const actionRef = useRef<HTMLButtonElement | null>(null);
  const onEntered = () => {
    actionRef?.current?.focus();
  };
  return (
    <Dialog TransitionProps={{ onEntered }} {...other}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children && <DialogContent>{children}</DialogContent>}
      <DialogActions>
        <Button
          onClick={(e) => {
            if (other.onClose) {
              other.onClose(e, "escapeButton");
            }
          }}
          color="inherit"
        >
          {translate("cancel")}
        </Button>
        <Button onClick={onSubmit} ref={actionRef}>
          {translate("confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
