import { DatePickerProps } from "@mui/lab";
import { FormControl } from "@mui/material";
import { Dayjs } from "dayjs";
import { ReactElement } from "react";
import { translate } from "../../../i18n/utils";
import { useComponent } from "../../context";
import { useValidation } from "../../validation";
import { YearPicker } from "../DatePicker";

type InputYearProps = DatePickerProps<Dayjs>;

export default function InputYear(props: InputYearProps): ReactElement {
  const { name, required, label, ...other } = props;
  const { setInput } = useValidation();
  const { components } = useComponent();
  const handleChange = (e: number | null) => {
    // setInput(name, e === initValue ? undefined : e);
    setInput({ name, value: e });
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <YearPicker
        name={name}
        value={components[name]?.value}
        onChange={handleChange}
        label={label ? `${translate(label)}${required ? "*" : ""}` : undefined}
        helperText={components[name]?.error ? translate("required") : undefined}
        error={components[name]?.error}
        {...other}
      />
    </FormControl>
  );
}
