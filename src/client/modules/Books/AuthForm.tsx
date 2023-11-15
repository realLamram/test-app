import { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AuthorDocument,
  CreateAuthorDocument,
  UpdateAuthorDocument,
} from "../../../api/gql/graphql";
import { RouterAction } from "../../App/Router/utils";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import useContextData from "../../context/useComponent";
import { Form as UiForm } from "../../ui/Form";
import { InputString } from "../../ui/Input";
import { Fields } from "../../ui/utils";
import useValidation from "../../validation/useValidation";
import { authorCreate, authorUpdate } from "../../../validation/schema/Authors";

export enum FieldNames {
  NAME = "name",
  SURNAME = "surName",
}

const fields: Fields = {
  [FieldNames.NAME]: { required: true, Component: InputString },
  [FieldNames.SURNAME]: { required: true, Component: InputString },
};

export default function AuthorForm(props: {
  setCreate: Function;
  setNewAuthor: Function;
}): ReactElement {
  const { setCreate, setNewAuthor } = props;
  const { resource, action } = useLoaderData();
  const params = useParams();
  const { isValid } = useValidation();
  const { components, setComponents } = useContextData();

  const { data: qData } = useData({
    doc: AuthorDocument,
    variables: { id: params.bookId },
    pause: Boolean(!params.bookId),
  });
  const book = qData?.book;

  const { execMutation: createMutation } = useMutation(CreateAuthorDocument);
  const { execMutation: updateMutation } = useMutation(UpdateAuthorDocument);

  const executeCreate = async () => {
    const data = {
      input: {
        name: components.name.value,
        surName: components.surName.value,
      },
    };

    const isValid = await createMutation(authorCreate, data);

    if (isValid) {
      setCreate(false);
      setNewAuthor({
        name: components.name.value,
        surName: components.surName.value,
      });
    }
  };

  const executeUpdate = async () => {
    const data = {
      id: params.bookId,
      input: {
        name: components.name.value,
        surName: components.surName.value,
      },
    };
    const isValid = await createMutation(authorUpdate, data);
  };

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

  const onSubmit = (e: any) => {
    e.preventDefault();

    action === RouterAction.NEW ? executeCreate() : executeUpdate();
  };

  return (
    <UiForm
      fields={{
        [FieldNames.NAME]: components[FieldNames.NAME] ?? fields[FieldNames.NAME],
        [FieldNames.SURNAME]: components[FieldNames.SURNAME] ?? fields[FieldNames.SURNAME],
      }}
      onSubmit={onSubmit}
    />
  );
}
