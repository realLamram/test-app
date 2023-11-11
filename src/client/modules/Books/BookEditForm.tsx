import { Box, Stack, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../..";
import { BookDocument, UpdateBookDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useBreakPoints, useData, useMutation } from "../../App/hooks";
import { useComponent } from "../../context";
import { Form } from "../../ui/Form";
import { InputFile, InputString, InputYear } from "../../ui/Input";
import { Fields } from "../../ui/utils";
import useValidation from "../../validation/useValidation";
import { Spinner } from "../../ui/Spinner";

export enum FieldNames {
  TITLE = "title",
  RELEASED = "released",
  FILE = "file",
}

const fields: Fields = {
  [FieldNames.TITLE]: { required: true, Component: InputString },
  [FieldNames.RELEASED]: { required: true, Component: InputYear },
  [FieldNames.FILE]: { required: false, Component: InputFile },
};

export default function BookEditForm(): ReactElement {
  const params = useParams();
  const { isValid } = useValidation();
  const { components, setComponents } = useComponent();
  const { downSM } = useBreakPoints();
  const [path, setPath] = useState<string | null>(null);

  const { data, fetching: dataFetching } = useData({
    doc: BookDocument,
    variables: { id: params.bookId },
    pause: Boolean(!params.bookId),
  });
  const { executeMutation: updateMutation, fetching } = useMutation(UpdateBookDocument);

  const executeUpdate = () => {
    updateMutation({
      id: params.bookId,
      input: {
        title: components.title.value,
        released: components.released.value,
      },
      file: components.file.value,
    });
  };

  useEffect(() => {
    if (data) {
      let dataFields = {};
      if (data)
        for (const key in fields) {
          dataFields = { ...dataFields, [key]: { ...fields[key], value: data.book[key] } };
        }
      setComponents((prev: any) => ({ ...prev, ...dataFields }));
      const path = data?.book?.files?.[0]?.path;
      setPath(path);
    }
  }, [data]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (
      isValid({
        [FieldNames.TITLE]: components[FieldNames.TITLE],
        [FieldNames.RELEASED]: components[FieldNames.RELEASED],
        [FieldNames.FILE]: components[FieldNames.FILE],
      })
    ) {
      executeUpdate();
    }
  };

  return (
    <Stack>
      {dataFetching ? (
        <Spinner />
      ) : (
        <>
          <Box>
            <Typography variant="subtitle2">{translate("Author")}</Typography>
            <Typography variant="h5">
              {`${data?.book?.author?.name} ${data?.book?.author?.surName}`}
            </Typography>
          </Box>
          <Stack sx={{ mt: 1 }} spacing={1} direction={downSM ? "column" : "row"}>
            <Box
              sx={{
                minWidth: 200,
                minHeight: 200,
                maxWidth: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {fetching ? (
                <Spinner />
              ) : path ? (
                <img loading="lazy" src={`${url}/${path}`} alt="cover" width="100%" height="auto" />
              ) : (
                <Typography color="error">No image!</Typography>
              )}
            </Box>
            <Form sx={{ width: "100%" }} onSubmit={onSubmit} />
          </Stack>
        </>
      )}
    </Stack>
  );
}
