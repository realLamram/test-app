import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Avatar,
  Box,
  Button,
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
import { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { translate } from "../../i18n/utils";
import { useUser } from "../context";
import { UserRole } from "../utils";
import { Resource } from "./Router/utils";
import SidebarToggle from "./Sidebar/SidebarToggle";
import useBreakPoints from "./hooks/useBreakPoints";

type LinksProps = {
  text: string;
  path: string;
};

const links = [
  { text: "Home", path: "/" },
  { text: "Modules", path: `/${Resource.BOOKS}` },
];

export default function TopBar(): ReactElement {
  const { pathname } = useLocation();
  const theme = useTheme();
  const { downMD } = useBreakPoints();
  const { userRole, setUserRole } = useUser();

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

  return (
    <AppBar>
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

        <Box sx={{ flexGrow: 0 }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
