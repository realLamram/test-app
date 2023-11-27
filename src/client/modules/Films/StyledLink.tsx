import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { grey } from "@mui/material/colors";

const StyledLink = styled(RouterLink)`
  color: ${grey[900]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-style: dotted;
  }
`;

export default StyledLink;
