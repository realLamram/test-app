import styled from "styled-components";
import { translate } from "../../../i18n/utils";
import { PropsWithChildren } from "react";
import { blue } from "@mui/material/colors";

type ButtonProps = PropsWithChildren & {
  primary?: boolean;
  onClick?: () => void;
};

const Button = styled.button<ButtonProps>`
  background-color: ${blue[500]};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  height: fit-content;

  &:hover {
    background-color: ${blue[600]};
  }
`;

export const StyledButton = (props: ButtonProps) => {
  const { children, ...other } = props;
  return <Button {...other}>{children}</Button>;
};
