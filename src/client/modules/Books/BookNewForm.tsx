import CreateIcon from "@mui/icons-material/Create";
import { Box } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Author } from "../../../api";
import { AuthorsDocument, BookDocument, CreateBookDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import useComponent from "../../context/useComponent";
import { Autocomplete } from "../../ui/Autocomplete";
import { ResponsiveButton } from "../../ui/Button";
import { Form as UiForm } from "../../ui/Form";
import { InputFile, InputString, InputYear } from "../../ui/Input";
import { Field, Fields } from "../../ui/utils";
import AuthorForm from "./AuthForm";
import { bookCreate } from "../../../validation/schema/Books";

export enum FieldNames {
  TITLE = "title",
  RELEASED = "released",
  BOOKLET = "booklet",
  FILE = "file",
}

const fields: Fields = {
  [FieldNames.TITLE]: { required: true, Component: InputString },
  [FieldNames.RELEASED]: { required: true, Component: InputYear },
  [FieldNames.FILE]: { required: true, Component: InputFile },
};

export default function BookForm(): ReactElement {
  const { resource, action } = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const { components, setComponents } = useComponent();
  const [author, setAuthor] = useState<Record<string, any> | null>(null);
  const [newAuthor, setNewAuthor] = useState<{ name: string; surName: string } | null>(null);
  const [create, setCreate] = useState<boolean>(false);
  const [disAutoComp, setDisAutoComp] = useState<boolean>(false);
  const { data: authors } = useData({ doc: AuthorsDocument });

  useEffect(() => {
    const newAuth = authors?.authors?.find(
      (author: Author) => author.name === newAuthor?.name && author.surName === newAuthor?.surName
    );
    newAuth && setAuthor({ id: newAuth.id, label: `${newAuth.name} ${newAuth.surName}` });
  }, [authors]);

  const { data: qData } = useData({
    doc: BookDocument,
    variables: { id: params.bookId },
    pause: Boolean(!params.bookId),
  });
  const book = qData?.book;

  const { execMutation: createMutation } = useMutation(CreateBookDocument);

  useEffect(() => {
    create && (setAuthor(null), setDisAutoComp(true));
    !create && setDisAutoComp(false);
  }, [author, create]);

  useEffect(() => {
    if (book) {
      let dataFields = {};
      const data: any = book;
      if (data)
        for (const key in fields) {
          dataFields = { ...dataFields, [key]: { ...fields[key], value: data[key] } };
        }
      setComponents((prev: any) => ({ ...prev, ...dataFields }));
    } else {
      setComponents((prev: any) => ({ ...prev, ...fields }));
    }
  }, [fields, book]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      input: {
        authorId: author?.id,
        title: components.title.value,
        released: components.released.value,
      },
      file: components.file.value,
    };

    const isValid = await createMutation(bookCreate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
  };

  const getOptions = (): { id: string; label: string }[] =>
    authors?.authors?.map((author: Author) => ({
      id: author.id,
      label: `${author.name} ${author.surName}`,
    }));

  //note - Jestliže je zadaný titul n. vydáno a dá se Vytvořit Autora,
  //aby se fieldy vymazaly
  const getComponent = (fieldName: FieldNames): Field => {
    if (!Boolean(author?.id)) {
      return fields[fieldName];
    } else {
      return {
        ...fields[fieldName],
        ...components[fieldName],
      };
    }
  };

  const titleComponent = {
    ...getComponent(FieldNames.TITLE),
    disabled: !Boolean(author?.id),
  };
  const releasedComponent = {
    ...getComponent(FieldNames.RELEASED),
    disabled: !Boolean(author?.id),
  };

  const fileComponent = {
    ...getComponent(FieldNames.FILE),
    disabled: !Boolean(author?.id),
  };

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          disabled={disAutoComp}
          value={author}
          options={getOptions()}
          isOptionEqualToValue={(option: { id: string; label: string }, value: any) =>
            option.id === value.id
          }
          label={translate("Authors")}
          onChange={(_: any, v: Record<string, "id" | "label"> | null) => {
            setAuthor(v);
          }}
          sx={{ mr: 3, maxWidth: 400 }}
        />
        <ResponsiveButton
          sx={{
            backgroundColor: create ? yellow[100] : "",
            ":hover": {
              backgroundColor: create ? yellow[200] : "",
            },
          }}
          icon={<CreateIcon />}
          onClick={() => setCreate(!create)}
        >
          {translate("create")}
        </ResponsiveButton>
      </Box>
      <Box sx={{ pt: 4 }}></Box>

      {create && (
        <Box sx={{ pb: 4 }}>
          <AuthorForm {...{ setCreate, setNewAuthor }} />
        </Box>
      )}

      <UiForm
        disabled={!Boolean(author?.id)}
        fields={{
          [FieldNames.TITLE]: titleComponent,
          [FieldNames.RELEASED]: releasedComponent,
          [FieldNames.FILE]: fileComponent,
        }}
        onSubmit={onSubmit}
      />
    </Box>
  );
}
