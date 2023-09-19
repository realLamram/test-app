// import { SideBarContext, SideBarToggle } from "@reallamram/lmr-ui";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import React, { ReactElement, useContext } from "react";
import SidebarToggle from "../Sidebar/SidebarToggle";
import SidebarContext from "../Sidebar/Context";
// import Logo from "./Logo";
// import MainMenu from "./MainMenu";
// import SearchBar from "./SearchBar";

export default function AppBar(): ReactElement {
  const { variant } = useContext(SidebarContext);
  return (
    <MuiAppBar sx={{ boxShadow: "none" }}>
      <Toolbar>
        <SidebarToggle
          sx={{
            borderRadius: 2,
            display: "flex",
            marginRight: variant === "temporary" ? 0 : "1em",
          }}
        />
        {/* <Logo short={isTemporary} /> */}
        {/* <SearchBar /> */}
        {/* <MainMenu /> */}
      </Toolbar>
    </MuiAppBar>
  );
}
