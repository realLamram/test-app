import { Box, CircularProgress } from "@mui/material";
import { ReactElement } from "react";

export default function Spinner({ fetching }: { fetching?: boolean }): ReactElement {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress />
    </Box>
  );
}
