import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import { ReactElement, useCallback, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import SidebarContext from "./Context";
import SidebarToggle from "./SidebarToggle";

type LinkProps = {
  text: string;
  path: string;
  icon: any;
};

const links = [{ text: "Employees", path: "employees", icon: <AppsIcon /> }];

export default function Sidebar(): ReactElement {
  const { pathname } = useLocation();
  const { open, setOpen, variant } = useContext(SidebarContext);
  const theme = useTheme();

  const selected = (path: string): boolean => (pathname.startsWith(path) ? true : false);

  const DrawerItem = (props: LinkProps): ReactElement => {
    const { path, text, icon } = props;

    return (
      <NavLink
        key={path}
        to={path}
        style={{ padding: 0, marginLeft: "5px", marginRight: "5px", display: "flex" }}
      >
        <ListItem
          sx={{
            height: "50px",
            backgroundColor: selected(path) ? theme.palette.action.selected : "transparent",
            borderRadius: "4px",
          }}
          disablePadding
        >
          <ListItemButton
            sx={{ borderRadius: "4px", "&:hover": { backgroundColor: "transparent" } }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            {open && <ListItemText primary={text} />}
          </ListItemButton>
        </ListItem>
      </NavLink>
    );
  };

  const renderDrawerItems = useCallback(
    (): ReactElement[] =>
      links.map((link: LinkProps) => (
        <DrawerItem key={link.path} path={link.path} text={link.text} icon={link.icon} />
      )),
    [open, pathname]
  );

  useEffect(() => {
    variant === "temporary" && setOpen(false);
  }, [pathname]);

  if (variant === "temporary") {
    return (
      <Drawer
        sx={{
          overflowX: "hidden",
          position: "fixed",
          left: "0px",
        }}
        anchor="left"
        open={open}
        variant="temporary"
        onClose={() => setOpen(false)}
      >
        <SidebarToggle sx={{ width: "40px", ml: "10px", mt: "10px" }}>
          <CloseIcon />
        </SidebarToggle>
        <List>{renderDrawerItems()}</List>
      </Drawer>
    );
  } else {
    return (
      <Drawer
        sx={{
          overflowX: "hidden",
          position: "fixed",
          left: "0px",
        }}
        anchor="left"
        open={open}
        variant="permanent"
        PaperProps={{
          sx: {
            width: !open ? "75px" : "230px",
            backgroundColor: "#FFFFF5",
            borderColor: "#F5F5F5",
          },
        }}
      >
        <Toolbar sx={{ maxHeight: "63px", mb: "1rem" }} />
        {renderDrawerItems()}
      </Drawer>
    );
  }
}
