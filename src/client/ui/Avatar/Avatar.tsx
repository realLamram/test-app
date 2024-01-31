import { AvatarProps, Avatar as MuiAvatar } from "@mui/material";
import { ReactElement } from "react";
import { useDataContext } from "../../context";

export default function Avatar(
  props: AvatarProps & { name?: string | null; surName?: string | null }
): ReactElement {
  const { name = "", surName = "", ...other } = props;
  const { data } = useDataContext();

  const initials = `${name ? name?.[0]?.toUpperCase() : data.name?.[0]?.toUpperCase()}${
    surName ? surName?.[0]?.toUpperCase() : data.surName?.[0]?.toUpperCase()
  }`;
  return (
    <MuiAvatar alt={`${data?.name || name} ${data?.surName || surName}`} {...other}>
      {initials}
    </MuiAvatar>
  );
}
