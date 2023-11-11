import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { ReactElement } from "react";
import { Data } from "../utils";
import { useDataContext } from "../../context";

export type AutocompleteProps = MuiAutocompleteProps<
  Data,
  boolean | undefined,
  boolean | undefined,
  false
> &
  TextFieldProps &
  any;

export default function Autocomplete(props: AutocompleteProps): ReactElement {
  const { label, options = [], ...other } = props;
  const { data } = useDataContext();
  return (
    <MuiAutocomplete
      //   disablePortal
      options={options}
      fullWidth
      // sx={{
      //   ...props.sx,
      //   width: 300,
      // }}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...other}
    />
  );
}
