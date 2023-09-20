import { IconButton, IconButtonProps } from "@mui/material";
import { ReactElement, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContext from "./Context";

type SidebarToggleProps = IconButtonProps & {};

export default function SidebarToggle(props: SidebarToggleProps): ReactElement {
  const { children, ...other } = props;
  const { open, setOpen } = useContext(SidebarContext);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <IconButton onClick={handleClick} {...other}>
      {children || <MenuIcon />}
    </IconButton>
  );
}
