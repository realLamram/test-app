import { Box, StackProps, Typography, TypographyProps } from "@mui/material";
import { ReactElement } from "react";
import { translate } from "../../../i18n/utils";
import { useDataContext } from "../../context";
import types from "../../modules/types";
import { localeDate } from "../utils";

export type FormatStackProps = StackProps & {
  component?: string;
  fields: (string | { name: string; heading?: string; props: TypographyProps })[];
  params?: { [key: string]: any };
  data?: Record<string, any>;
};

type FieldProps = {
  heading?: string;
  text: string;
  type?: string;
  idx: number;
};

function FormatBox(props: FieldProps): ReactElement {
  const { heading, text, type = "string", idx } = props;

  return (
    <>
      {idx !== 0 ? (
        <>
          {" "}
          <span>•</span>{" "}
        </>
      ) : (
        <></>
      )}
      <Box component="span">{heading && `${translate(heading)}: `}</Box>
      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
        {text && type === "Date" ? localeDate(text) : text}
      </Box>
    </>
  );
}

export default function FormatStack(props: FormatStackProps): ReactElement | null {
  const { component, fields, params, data, ...other } = props;
  const { data: CtxData } = useDataContext();

  if (fields?.length > 0) {
    return (
      <>
        {fields.map((field, idx) => {
          if (typeof field === "string" && (data?.[field] || CtxData[field])) {
            return (
              <FormatBox
                key={field}
                heading={field}
                idx={idx}
                text={data ? data?.[field] : CtxData[field]}
                type={data ? types[data?.__typename][field] : types[CtxData?.__typename][field]}
              />
            );
          } else if (typeof field !== "string" && (data?.[field.name] || CtxData[field.name])) {
            return (
              <Box component="span" key={field.name}>
                {field.heading && `${translate(field.heading)}: `}
                {
                  <Typography {...field.props}>
                    {data ? data?.[field.name] : CtxData[field.name]}
                  </Typography>
                }
              </Box>
            );
          }
        })}
      </>
    );
  } else {
    return null;
  }
}
