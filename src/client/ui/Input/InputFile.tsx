import { Box, Button, ButtonProps, FormHelperText } from "@mui/material";
import { ReactElement, useState } from "react";
import { useValidation } from "../../validation";
import { translate } from "../../../i18n/utils";

type InputFileProps = ButtonProps & { name: string; error?: boolean };

export default function InputFile(props: InputFileProps): ReactElement {
  const { error } = props;
  const [tooBig, setTooBig] = useState<boolean>(false);

  const { setInput } = useValidation();

  const handleChange = (e: any) => {
    const selectedFile = e.target.files[0];
    const size = e.target.files[0].size;

    if (selectedFile && size <= 512000) {
      setTooBig(false);
      setInput({ name: "file", value: selectedFile });
    } else {
      setTooBig(true);
    }
  };

  return (
    <Box>
      <Button variant="contained" component="label">
        {translate("uploadImage")}
        <input accept="image/png, image/jpeg" type="file" hidden onChange={handleChange} />
      </Button>
      {tooBig && <FormHelperText sx={{ color: "red" }}>{translate("tooBig")}</FormHelperText>}
      {error && <FormHelperText sx={{ color: "red" }}>{translate("requiredField")}</FormHelperText>}
    </Box>
  );
}
