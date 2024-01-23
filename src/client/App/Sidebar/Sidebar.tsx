import CloseIcon from "@mui/icons-material/Close";
import GroupIcon from "@mui/icons-material/Group";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
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
import { grey } from "@mui/material/colors";
import { Fragment, ReactElement, ReactNode, useCallback, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { translate } from "../../../i18n/utils";
import { Link } from "../../ui/Link";
import { Resource } from "../Router/utils";
import SidebarContext from "./Context";
import SidebarToggle from "./SidebarToggle";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MapIcon from "@mui/icons-material/Map";
import RocketIcon from "@mui/icons-material/Rocket";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import useUser from "../User/useUser";
import { UserRole } from "@prisma/client";

type LinkProps = {
  title: string;
  path: string;
  icon: ReactNode;
  canRoles?: UserRole[];
};

const links: LinkProps[] = [
  {
    title: "Login",
    path: Resource.LOGIN,
    icon: <VpnKeyIcon />,
    canRoles: [UserRole.ADMIN, UserRole.USER],
  },
  { title: "Gallery", path: Resource.GALLERY, icon: <MapIcon /> },
  { title: "Star Wars API", path: Resource.SWAPI, icon: <RocketIcon /> },
  { title: "Films", path: Resource.FILMS, icon: <LocalMoviesIcon /> },
  { title: "Books", path: Resource.BOOKS, icon: <AutoStoriesIcon /> },
  { title: "Astronauts", path: Resource.ASTRONAUTS, icon: <RocketLaunchIcon /> },
  { title: "Employees", path: Resource.EMPLOYEES, icon: <GroupIcon /> },
];

export default function Sidebar(): ReactElement {
  const { pathname } = useLocation();
  const { open, setOpen, variant } = useContext(SidebarContext);
  const theme = useTheme();
  const { can, user } = useUser();

  const selected = (path: string): boolean => (pathname.startsWith(`/${path}`) ? true : false);

  const DrawerItem = (props: LinkProps): ReactElement => {
    const { path, title, icon } = props;

    return (
      <Link
        key={path}
        url={path}
        style={{ padding: 0, marginLeft: "5px", marginRight: "5px", display: "flex" }}
      >
        <ListItem
          sx={{
            height: "50px",
            backgroundColor: selected(path) ? theme.palette.action.selected : "transparent",
            borderRadius: "4px",
            ":hover": { backgroundColor: grey[100] },
          }}
          disablePadding
        >
          <ListItemButton
            sx={{ borderRadius: "4px", "&:hover": { backgroundColor: "transparent" } }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            {open && <ListItemText primary={title ? translate(title) : ""} />}
          </ListItemButton>
        </ListItem>
      </Link>
    );
  };

  const renderDrawerItems = useCallback(
    (): ReactElement[] =>
      links.map((link: LinkProps) => (
        <Fragment key={link.path}>
          {can(link.canRoles) && (
            <DrawerItem key={link.path} path={link.path} title={link.title} icon={link.icon} />
          )}
        </Fragment>
      )),
    [open, pathname, user]
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
