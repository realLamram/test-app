import { Avatar } from "@mui/material";
import { ReactElement } from "react";
import useUser from "./useUser";

export default function UserAvatar(): ReactElement {
  const { picture, email } = useUser();
  return <Avatar alt={email} src={picture} />;
}
