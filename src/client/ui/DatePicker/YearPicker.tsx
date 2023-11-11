import { DatePickerProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { ReactElement } from "react";
import DatePicker from "./DatePicker";

export type YearPickerProps = Omit<DatePickerProps<Dayjs>, "value" | "onChange" | "label"> & {
  value?: number | null;
  onChange: (value: number | null) => void;
  label?: string;
  error?: boolean;
  helperText?: string;
  name: string;
};

export default function YearPicker(props: YearPickerProps): ReactElement {
  const { value, onChange, label, ...other } = props;

  return (
    <DatePicker
      {...other}
      views={["year"]}
      value={typeof value === "number" ? dayjs().year(value) : value}
      label={label}
      onChange={(date) => {
        onChange(date ? date.year() : date);
      }}
    />
  );
}
