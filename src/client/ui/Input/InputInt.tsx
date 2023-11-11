import { TextField } from "@mui/material";
import React, { ReactElement, useContext } from "react";
// import { ComponentParams } from "../Component";
// import { useData } from "../data";
// import { useValidation } from "../validation";

export default function InputInt(): ReactElement {
  //   const { data } = useData();
  //   const { name, resource, table } = useContext(ComponentParams);
  //   const { errors, input, isRequired, isValid, setInput } = useValidation(name);
  //   const value = (input[name] === undefined ? data?.[name] : input[name]) ?? "";
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.value;
  //     const newInput = newValue
  //       ? isNaN(Number(newValue))
  //         ? newValue
  //         : Number(newValue)
  //       : data
  //       ? null
  //       : undefined;
  //     // setInput(name, data?.[name] === newInput ? undefined : newInput);
  //   };

  return (
    <>intinput</>
    // <TextField
    //   error={!isValid}
    //   helperText={errors && translateRules(resource, name, errors)}
    //   name={name}
    //   autoComplete="off"
    //   label={translate()}
    //   value={value}
    //   onChange={handleChange}
    //   variant="outlined"
    // />
  );
}
