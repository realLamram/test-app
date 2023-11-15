import { LoadingButton } from "@mui/lab";
import { Box, BoxProps } from "@mui/material";
import { Fragment, ReactElement } from "react";
import { translate } from "../../../i18n/utils";
import useComponent from "../../context/useComponent";
import { Grid } from "../Grid";
import { Data, Field, Fields } from "../utils";

export type FormProps = BoxProps<"form"> & {
  fields?: Fields;
  submitted?: boolean;
  onSubmit?: (input: Data) => void;
  disabled?: boolean;
  validationSchema?: any;
};

const FormItem = ([name, field]: [name: string, field: Field]): ReactElement => {
  const { Component, error, value, required, disabled, helperText } = field;

  return (
    <>
      {Component && (
        <Component
          key={name}
          name={name}
          label={name}
          error={error}
          helperText={helperText}
          value={value}
          required={required}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default function Form(props: FormProps) {
  const { fields = {}, disabled = false, onSubmit = () => {}, validationSchema, ...other } = props;
  const { components } = useComponent();

  const schema = validationSchema?.describe().fields;

  return (
    <Box onSubmit={onSubmit} component="form" {...other}>
      <Grid gap={2} xl={4} lg={3}>
        {Object.entries(Object.keys(fields)?.length ? fields : components).map(
          ([key, val], idx) => {
            val = {
              ...val,
              required: !schema?.[key].nullable || false,
            };
            return <Fragment key={idx}> {FormItem([key, val])}</Fragment>;
          }
        )}
        <Box
          sx={{
            mt: 2,
            gridColumn: { lg: "span 4 / span 4" },
            display: "flex",
            justifyContent: "start",
          }}
        >
          <LoadingButton disabled={disabled} size="small" variant="contained" type="submit">
            {translate("save")}
          </LoadingButton>
        </Box>
      </Grid>
    </Box>
  );
}
