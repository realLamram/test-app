import { Typography } from "@mui/material";
import { Fragment, ReactElement } from "react";
import { useDataContext } from "../../context";
import { Data } from "../utils";

export default function FormatString(props: {
  fields: string[];
  data?: Data;
}): ReactElement | null {
  const { fields, data } = props;
  const { data: CtxData } = useDataContext();

  if (fields?.length > 0) {
    return (
      <>
        {fields.map((field, idx) => {
          return (
            <Fragment key={idx}>
              <Typography component="span">{`${data ? data[field] : CtxData[field]}`}</Typography>
              {idx < fields.length - 1 && " "}
            </Fragment>
          );
        })}
      </>
    );
  } else {
    return null;
  }
}
