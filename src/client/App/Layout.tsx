import { Box, CssBaseline, Toolbar } from "@mui/material";
import { ReactElement, useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import SidebarContext from "../Sidebar/Context";
import Sidebar from "../Sidebar/Sidebar";
import AppBar from "./AppBar";
// import Error from "./Error";

export default function Layout(): ReactElement {
  const data = useLoaderData();
  const { variant, open } = useContext(SidebarContext);

  return (
    <Box>
      <Box display="flex" marginLeft={variant === "temporary" ? "0px" : open ? "266px" : "78px"}>
        <CssBaseline />
        <AppBar />
        <Sidebar />
        <Box>
          <Toolbar />
          <Outlet />
        </Box>
        {/* <Error /> */}
      </Box>
    </Box>
  );
}
