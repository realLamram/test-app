import { ReactElement, SyntheticEvent, useState } from "react";
import { useComponent } from "../../context";
import { Autocomplete, AutocompleteProps } from "../Autocomplete";
import { Data } from "../utils";

export default function InputObject(props: AutocompleteProps & any): ReactElement {
  // const {options}
  const { components, setComponents } = useComponent();

  const [value, setValue] = useState<Data | null>();

  const handleChange = (_: SyntheticEvent, value: Data | null) => {
    // const newInput =
    //   value && !(list && Array.isArray(value) && value.length === 0)
    //     ? value
    //     : data
    //     ? null
    //     : undefined;
    // if (newInput === null) {
    //   setInput(name, data === null ? undefined : null);
    // } else if (newInput === undefined) {
    //   setInput(name);
    // } else if (Array.isArray(newInput) && list) {
    //   setInput(
    //     name,
    //     newInput.map((data: Data) => data.id)
    //   );
    // } else if (!Array.isArray(newInput) && !list) {
    //   setInput(name, data?.[name]?.id === newInput.id ? undefined : newInput.id);
    // }
    // setValue(value);
  };

  return (
    <Autocomplete
      onChange={handleChange}
      value={value}
      //   error={!isValid}
      //   helperText={errors && translateRules(resource, name, errors)}
      label="Autoooo"
      sx={{ width: "100%" }}
      {...props}
    />
  );
}
