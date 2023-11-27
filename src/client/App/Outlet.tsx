import { Box, Container } from "@mui/material";
import { ReactElement, useContext } from "react";
import { Outlet as ReactOutlet } from "react-router-dom";
import SidebarContext from "./Sidebar/Context";
import { useBreakPoints } from "./hooks";
import { Toast } from "../ui/Toast";

export default function Outlet(): ReactElement {
  const { downMD } = useBreakPoints();
  const { open } = useContext(SidebarContext);

  const marginLeft = () => {
    if (downMD) {
      return "15px";
    } else {
      return open ? "250px" : "95px";
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 95px)",
        ml: marginLeft(),
        mr: "15px",
        mt: "80px",
        backgroundColor: "#FFFFF5",
        overflow: "auto",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: 0,
        }}
      >
        <Toast />
        <ReactOutlet />
      </Container>
    </Box>
  );
}
