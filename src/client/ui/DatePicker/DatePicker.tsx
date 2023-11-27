import CloseIcon from "@mui/icons-material/Close";
import { FormControl, FormHelperText, IconButton } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/cs";
import { ReactElement, useState } from "react";
import { translate } from "../../../i18n/utils";
import { useValidation } from "../../validation";

export type DatePickerProps = MuiDatePickerProps<dayjs.Dayjs> & {
  helperText?: string | null;
  error?: boolean;
  onChange?: (value: Dayjs | null, context?: any) => void;
  name?: string;
  label?: string;
  required?: boolean;
  handleDelete?: () => void;
};

const DatePicker = (props: DatePickerProps): ReactElement => {
  const {
    helperText,
    error,
    slots = {},
    slotProps = {},
    value,
    label,
    name,
    required,
    handleDelete,
    ...other
  } = props;
  const [hover, setHover] = useState<boolean>(false);
  const { setInput } = useValidation();

  const handleChange = (e: any) => {
    const date = e.format("YYYY-MM-DD");

    props.name && setInput({ name: props.name, value: date });
  };

  slotProps.textField = {
    ...slotProps?.textField,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  const _handleDelete = () => {
    props.name && setInput({ name: props.name, value: null });
  };

  slots.openPickerButton = (props: any) => {
    return (
      <>
        {value && hover && (
          <IconButton
            sx={{ position: "absolute", right: "45px" }}
            size="small"
            onClick={handleDelete ?? _handleDelete}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
        <IconButton size="small" {...props} />
      </>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="cs">
      <FormControl error variant="standard">
        <MuiDatePicker
          onChange={handleChange}
          slots={slots}
          slotProps={{
            ...slotProps,
            textField: {
              ...slotProps?.textField,
              // helperText,
              error,
            },
          }}
          label={label ? `${translate(label)}${required ? "*" : ""}` : label}
          value={value ? dayjs(value) : null}
          {...other}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </LocalizationProvider>
  );
};

export default DatePicker;
