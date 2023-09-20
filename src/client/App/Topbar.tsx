import { AppBar, Button, IconButton, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import useBreakPoints from "./hooks/useBreakPoints";
import SidebarToggle from "./Sidebar/SidebarToggle";

type LinksProps = {
  text: string;
  path: string;
};

const links = [
  { text: "Home", path: "/" },
  { text: "Employees", path: "/employees" },
];

export default function TopBar(): ReactElement {
  const { pathname } = useLocation();
  const theme = useTheme();
  const { downMD } = useBreakPoints();

  const getBGColor = (path: string): string => {
    if (pathname === "/" && pathname.startsWith(path)) {
      return theme.palette.action.focus;
    } else if (path !== "/" && pathname.startsWith(`/${path.split("/")[1]}`)) {
      return theme.palette.action.focus;
    }
    return "";
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
                <Typography sx={{ whiteSpace: "nowrap" }}> {link.text}</Typography>
              </Button>
            </Link>
          ))}
        </Stack>
        <IconButton></IconButton>
      </Toolbar>
    </AppBar>
  );
}
