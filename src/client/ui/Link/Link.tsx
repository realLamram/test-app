import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { ReactElement, forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

export type LinkProps = MuiLinkProps & {
  url: string;
  resource?: string;
  text?: string;
  children?: any;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref): ReactElement => {
  const { url, text, children, ...other } = props;
  return (
    <MuiLink
      color="inherit"
      underline="none"
      ref={ref}
      sx={{ textDecoration: "none" }}
      component={RouterLink}
      to={url}
      {...other}
    >
      {text || children}
    </MuiLink>
  );
});

export default Link;
