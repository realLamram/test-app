import { ReactElement, useEffect } from "react";
import { Fields } from "../../ui/utils";
import { InputString } from "../../ui/Input";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import { useComponent } from "../../context";
import { CreateTodoDocument, TodoDocument, UpdateTodoDocument } from "../../../api/gql/graphql";
import { useUser } from "../../App/User";
import { useNavigate, useParams } from "react-router-dom";
import { Form as UiForm } from "../../ui/Form";
import { todoCreate, todoUpdate } from "../../../validation/schema/Todos";
import { UserRole } from "@prisma/client";
import { RouterAction } from "../../App/Router/utils";

export enum FieldNames {
  TITLE = "title",
}

const fields: Fields = {
  [FieldNames.TITLE]: { Component: InputString },
};

export default function Form(): ReactElement {
  const { resource, action } = useLoaderData();
  const { components, setComponents } = useComponent();
  const params = useParams();
  const { id } = useUser();
  const navigate = useNavigate();
  const { can, setUser } = useUser();

  const { data: qData } = useData({
    doc: TodoDocument,
    variables: { id: params.id },
    pause: Boolean(!params.id),
  });

  const todo = qData?.todo;

  useEffect(() => {
    if (!can([UserRole.ADMIN, UserRole.USER])) {
      navigate("/");
      setUser(null);
    }
  }, []);

  const { execMutation: createMutation } = useMutation(CreateTodoDocument);
  const { execMutation: updateMutation } = useMutation(UpdateTodoDocument);

  const executeCreate = async () => {
    const data = {
      input: {
        userId: id,
        title: components.title.value,
      },
    };

    const isValid = await createMutation(todoCreate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
  };

  const executeUpdate = async () => {
    const data = {
      id: todo.id,
      input: {
        title: components.title.value,
      },
    };

    const isValid = await updateMutation(todoUpdate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    action === RouterAction.NEW ? executeCreate() : executeUpdate();
  };

  useEffect(() => {
    if (todo?.id) {
      let dataFields = {};
      const data: any = todo;
      if (data)
        for (const key in fields) {
          dataFields = { ...dataFields, [key]: { ...fields[key], value: data[key], pokus: 123 } };
        }
      setComponents(dataFields);
    } else {
      setComponents(fields);
    }
  }, [fields, todo]);

  return (
    <>
      <UiForm onSubmit={onSubmit} validationSchema={todoCreate} />
    </>
  );
}
