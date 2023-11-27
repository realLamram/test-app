import { grey } from "@mui/material/colors";
import React, { ReactElement } from "react";
import styled, { CSSObject } from "styled-components";

export type StyledProps = {
  $sx?: Record<string, CSSObject | number | string>;
  children?: React.ReactNode;
  className?: string;
  theme?: Record<string, any>;
};

const Card = styled.div(({ $sx }: StyledProps) => {
  return {
    width: "100%",
    height: "auto",
    color: grey[800],
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    ...$sx,
  };
});

const CardHeader = styled.div(({ $sx }: StyledProps) => ({
  width: "100%",
  color: grey[800],
  ...$sx,
}));

const CardBody = styled.div(({ $sx }: StyledProps) => ({
  width: "100%",
  color: grey[800],
  display: "flex",
  marginTop: 20,
  ...$sx,
}));

const Title = styled.div({
  width: "100%",
  color: grey[800],
  fontSize: 25,
});

export default function StyledCard(props: StyledProps): ReactElement {
  return <Card {...props} />;
}

export function StyledCardHeader(props: StyledProps): ReactElement {
  return <CardHeader {...props} />;
}

export function StyledCardBody(props: StyledProps): ReactElement {
  return <CardBody {...props} />;
}

export function StyledTitle(props: StyledProps): ReactElement {
  return <Title {...props} />;
}
