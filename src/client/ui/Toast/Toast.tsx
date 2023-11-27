import { ReactElement } from "react";
import { useToast } from "../../validation";
import { Alert, Snackbar } from "@mui/material";

export default function Toast(): ReactElement {
  const { openToast, setOpenToast, severity, toastMessage } = useToast();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };

  return (
    <Snackbar
      open={openToast}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {toastMessage}
      </Alert>
    </Snackbar>
  );
}
