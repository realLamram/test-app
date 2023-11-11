import { FormControl, FormHelperText, TextField, TextFieldProps } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { translate } from "../../../i18n/utils";
import useValidation from "../../validation/useValidation";

type InputString = TextFieldProps & { value: string; name: string; label?: string };

export default function InputString(props: InputString): ReactElement {
  const { value, name, label, helperText, required, ...other } = props;
  const [_value, _setValue] = useState<string>("");
  const { setInput } = useValidation();

  useEffect(() => {
    _setValue(props.value);
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInput({ name: props.name, value });
  };

  return (
    <FormControl error variant="standard">
      <TextField
        onChange={handleChange}
        sx={{ width: "100%", maxWidth: "900px" }}
        autoComplete="off"
        variant="outlined"
        value={_value || ""}
        label={label ? `${translate(label)}${required ? "*" : ""}` : null}
        {...other}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
