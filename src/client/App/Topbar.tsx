import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { red } from "@mui/material/colors";
import axios from "axios";
import { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { url } from "../..";
import { translate } from "../../i18n/utils";
import { useUser as useTestUser } from "../context";
import { UserRole } from "../utils";
import { useToast } from "../validation";
import { Severity } from "../validation/ToastContext";
import { Resource } from "./Router/utils";
import SidebarToggle from "./Sidebar/SidebarToggle";
import { UserAvatar, useLogin, useUser } from "./User";
import useBreakPoints from "./hooks/useBreakPoints";

type LinksProps = {
  text: string;
  path: string;
};

const links = [
  { text: "Home", path: "/" },
  { text: "Modules", path: `/${Resource.GALLERY}` },
];

export default function TopBar(): ReactElement {
  const login = useLogin();
  const { setUser } = useUser();
  const { picture } = useUser();
  const { pathname } = useLocation();
  const theme = useTheme();
  const { downMD } = useBreakPoints();
  const { userRole, setUserRole } = useTestUser();
  const { setToastMessage, setSeverity, setOpenToast } = useToast();
  const [open, setOpen] = useState<boolean>(false);

  const getBGColor = (path: string): string => {
    if (pathname === "/" && path === "/") {
      return theme.palette.action.focus;
    } else if (
      path !== "/" &&
      Object.values(Resource).find((item: string) => item === pathname.split("/")[1])
    ) {
      return theme.palette.action.focus;
    }
    return "";
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSubmit = async () => {
    const logout = await axios(`/logout`, {
      withCredentials: true,
    });
    setUser({});

    if (logout.statusText === "OK") {
      setToastMessage(translate("logout_successful"));
      setSeverity(Severity.Success);
      setOpenToast(true);
    } else {
      setToastMessage(translate("logout_failed"));
      setSeverity(Severity.Error);
      setOpenToast(true);
    }
    setOpen(false);
  };

  return (
    <AppBar>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle variant="h5">Logout</DialogTitle>
        <Divider sx={{ width: "90%", mx: "auto" }} />
        <Typography sx={{ p: 3 }}>{translate("logout_confirm")}</Typography>
        <DialogActions>
          <Button
            onClick={(e) => {
              setOpen(false);
            }}
            color="inherit"
          >
            {translate("cancel")}
          </Button>
          <Button onClick={onSubmit}>{translate("confirm")}</Button>
        </DialogActions>
      </Dialog>

      <Toolbar
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <SidebarToggle />
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          {links.map((link: LinksProps) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ padding: 0, marginLeft: "5px", marginRight: "5px" }}
            >
              <Button
                sx={{
                  px: downMD ? ".5rem" : "4rem",
                  color: "black",
                  backgroundColor: getBGColor(link.path),
                  "&:hover": {
                    backgroundColor: getBGColor(link.path),
                  },
                }}
              >
                <Typography sx={{ whiteSpace: "nowrap" }}> {translate(link.text)}</Typography>
              </Button>
            </Link>
          ))}
        </Stack>

        <Stack sx={{ flexGrow: 0 }} spacing={1} direction="row">
          <IconButton sx={{ p: 0 }} onClick={() => (picture ? setOpen(true) : login())}>
            {!picture ? (
              <img src={`${url}/google_icon_256.png`} alt="Google Sign in" width={55} />
            ) : (
              <UserAvatar />
            )}
          </IconButton>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ backgroundColor: userRole === UserRole.ADMIN ? red[500] : "" }}>
                {userRole === UserRole.ADMIN ? <AdminPanelSettings /> : <PersonIcon />}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <FormControlLabel
                control={
                  <Switch
                    checked={userRole === UserRole.ADMIN ? true : false}
                    onChange={(e) => setUserRole(e.target.checked ? UserRole.ADMIN : UserRole.USER)}
                  />
                }
                label="Admin"
              />
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
