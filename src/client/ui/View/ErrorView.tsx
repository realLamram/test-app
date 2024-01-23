import { ReactElement, useEffect } from "react";
import { useComponents } from "../../App/hooks";
import { Box } from "@mui/material";
import ReactGA from "react-ga";

export default function ErrorView(): ReactElement {
  useEffect(() => {
    ReactGA.pageview(window.location.href);
  }, []);
  return <Box sx={{ my: 1 }}> Error View</Box>;
}
