import { Avatar as MuiAvatar } from "@mui/material";
import { ReactElement } from "react";
import { useDataContext } from "../../context";

export default function Avatar(props: { name?: string; surName?: string }): ReactElement {
  const { name, surName } = props;
  const { data } = useDataContext();

  const initials = `${name ? name?.[0]?.toUpperCase() : data.name?.[0]?.toUpperCase()}${
    surName ? surName?.[0]?.toUpperCase() : data.surName?.[0]?.toUpperCase()
  }`;
  return <MuiAvatar>{initials}</MuiAvatar>;
}
