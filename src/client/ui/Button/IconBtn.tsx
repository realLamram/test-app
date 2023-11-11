import { Badge, IconButton, IconButtonProps, Tooltip, useTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React, { PropsWithChildren, ReactElement, useContext } from "react";
import { Link } from "react-router-dom";

type badgeColorProps =
  | "primary"
  | "default"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

type IconBtnProps = IconButtonProps &
  PropsWithChildren & {
    badgeContent?: number;
    badgeColor?: badgeColorProps;
    display?: string;
    onClick?: any;
    radius?: number;
    size?: number;
    tooltip?: string;
    themedColor?: boolean;
  };

export default function IconBtn(props: IconBtnProps): ReactElement {
  const {
    badgeContent,
    badgeColor,
    display,
    children,
    onClick,
    radius,
    size,
    tooltip,
    themedColor,
    ...other
  } = props;
  // const { colorScheme } = useContext(ColorSchemeContext);
  const theme = useTheme();

  return (
    <Tooltip title={tooltip}>
      <Badge badgeContent={badgeContent} color={badgeColor || "error"}>
        <IconButton
          {...other}
          onClick={onClick}
          sx={{
            ...other.sx,
            display: display || "flex",
            // color: themedColor ? theme.palette.primary.dark : "",

            width: size,
            height: size,
            borderRadius: radius ? radius : 2,
            // backgroundColor:
            //   colorScheme === "light" ? "primary.light" : theme.palette.primary.light + 35,
            // "&:hover": {
            //   backgroundColor: colorScheme === "light" ? theme.palette.primary.main + 30 : "",
            // },
          }}
        >
          {children}
        </IconButton>
      </Badge>
    </Tooltip>
  );
}
