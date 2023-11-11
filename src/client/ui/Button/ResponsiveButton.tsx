import { Button, ButtonProps, IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { useBreakPoints } from "../../App/hooks";
import CircleIcon from "@mui/icons-material/Circle";

type ResponsiveButtonProps = ButtonProps & IconButtonProps & { icon?: ReactNode };

export default function ResponsiveButton(props: ResponsiveButtonProps): ReactElement {
  const { children, icon, onClick = () => {}, ...other } = props;
  const { downSM } = useBreakPoints();

  if (downSM) {
    return (
      <Tooltip title={children}>
        <IconButton onClick={onClick} color="primary" {...other}>
          {icon ? icon : <CircleIcon />}
        </IconButton>
      </Tooltip>
    );
  } else {
    return (
      <Button onClick={onClick} variant="outlined" {...other}>
        {children}
      </Button>
    );
  }
}
