import SearchIcon from "@mui/icons-material/Search";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import { ReactElement } from "react";
import { translate } from "../../../i18n/utils";

export type FulltextProps = Omit<OutlinedInputProps, "onChange"> & {
  onChange?: (e: string) => void;
  placeHolder?: string;
};

export default function Fulltext(props: FulltextProps): ReactElement {
  const { value, onChange, placeHolder, ...other } = props;

  return (
    <OutlinedInput
      sx={{
        flex: 1,
      }}
      size="small"
      autoComplete="off"
      value={value || ""}
      startAdornment={<SearchIcon />}
      placeholder={placeHolder ? placeHolder : translate("search")}
      onChange={(e: any) => {
        onChange && onChange(e.target.value);
      }}
      {...other}
    />
  );
}
