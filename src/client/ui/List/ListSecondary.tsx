import { Box } from "@mui/material";
import { ReactElement } from "react";
import { useDataContext } from "../../context";
import { localeDate } from "../utils";

type FieldProps = {
  heading?: string;
  text: any;
  type?: string;
};

export default function ListSecondary(props: FieldProps): ReactElement {
  const { heading, text, type = "string" } = props;

  const d = useDataContext();

  return (
    <Box component="span">
      {heading && `${heading}: `}
      {text && type === "Date" ? localeDate(text) : text}
    </Box>
  );
}
