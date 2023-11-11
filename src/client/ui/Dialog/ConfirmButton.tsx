import { Button, ButtonProps, IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { ReactElement, ReactNode, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

export type ConfirmButtonProps = ButtonProps &
  IconButtonProps & {
    dialogTitle?: ReactNode;
    toolTipTitle?: ReactNode;
    icon?: ReactNode;
  };

export default function ConfirmButton(props: ConfirmButtonProps): ReactElement | null {
  const { dialogTitle, toolTipTitle, icon, onClick, ...other } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {icon ? (
        <Tooltip title={toolTipTitle}>
          <IconButton
            onClick={(e) => {
              setOpen(true);
            }}
            {...other}
          >
            {icon}
          </IconButton>
        </Tooltip>
      ) : (
        <Button
          {...other}
          onClick={(e) => {
            setOpen(true);
          }}
          {...other}
        />
      )}
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(e) => {
          if (onClick) {
            onClick(e);
          }
          setOpen(false);
        }}
        title={dialogTitle}
      />
    </>
  );
}
