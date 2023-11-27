import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { ReactElement } from "react";
import { StyledProps } from "./StyledCard";

const List = styled.div(({ $sx }: StyledProps) => ({
  width: "100%",
  color: grey[800],
  borderRadius: 5,

  ...$sx,
}));
const ListItem = styled.div(({ $sx }: StyledProps) => ({
  padding: 5,
  width: "100%",
  color: grey[800],
  display: "flex",
  borderBottom: `1px solid ${grey[300]}`,
  "&:hover": {
    backgroundColor: grey[50],
  },
  ...$sx,
}));

const ListItemTitle = styled.div(({ $sx }: StyledProps) => ({
  width: "100%",
  color: grey[800],
  fontSize: 12,
  ...$sx,
}));

export default function StyledList(props: StyledProps): ReactElement {
  return <List {...props} />;
}

export function StyledListItem(props: StyledProps): ReactElement {
  return <ListItem {...props} />;
}

export function StyledListItemTitle(props: StyledProps): ReactElement {
  return <ListItemTitle {...props} />;
}
