import { ReactElement } from "react";
import { useComponents } from "../../App/hooks";
import { Box } from "@mui/material";

export default function IndexView(): ReactElement {
  const components = useComponents();
  return <Box sx={{ my: 1 }}> {components}</Box>;
}
