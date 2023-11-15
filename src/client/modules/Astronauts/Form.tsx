import { ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AstronautDocument,
  CreateAstronautDocument,
  UpdateAstronautDocument,
} from "../../../api/gql/graphql";
import { astronautCreate, astronautUpdate } from "../../../validation/schema/Astronauts";
import { RouterAction } from "../../App/Router/utils";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import useComponent from "../../context/useComponent";
import { DatePicker } from "../../ui/DatePicker";
import { Form as UiForm } from "../../ui/Form";
import { InputString } from "../../ui/Input";
import { Fields } from "../../ui/utils";

export enum FieldNames {
  NAME = "name",
  SURNAME = "surName",
  SKILL = "skill",
  BIRTH = "birth",
  HAIR = "hair",
  EYES = "eyes",
}

const fields: Fields = {
  [FieldNames.NAME]: { Component: InputString },
  [FieldNames.SURNAME]: { Component: InputString },
  [FieldNames.SKILL]: { Component: InputString },
  [FieldNames.BIRTH]: { Component: DatePicker },
  [FieldNames.HAIR]: { Component: InputString },
  [FieldNames.EYES]: { Component: InputString },
};
export default function Form(): ReactElement {
  const { resource, action } = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const { components, setComponents } = useComponent();

  const { data: qData } = useData({
    doc: AstronautDocument,
    variables: { id: params.astronautId },
    pause: Boolean(!params.astronautId),
  });
  const astronaut = qData?.astronaut;

  const { execMutation: createMutation } = useMutation(CreateAstronautDocument);
  const { execMutation: updateMutation } = useMutation(UpdateAstronautDocument);

  const executeCreate = async () => {
    const data = {
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
        hair: components.hair.value,
        eyes: components.eyes.value,
      },
    };

    const isValid = await createMutation(astronautCreate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
  };
  const executeUpdate = async () => {
    const data = {
      id: params.astronautId,
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
        hair: components.hair.value,
        eyes: components.eyes.value,
      },
    };

    const isValid = await updateMutation(astronautUpdate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
  };

  useEffect(() => {
    if (astronaut) {
      let dataFields = {};
      const data: any = astronaut;
      if (data)
        for (const key in fields) {
          dataFields = { ...dataFields, [key]: { ...fields[key], value: data[key] } };
        }

      setComponents(dataFields);
    } else {
      setComponents(fields);
    }
  }, [fields, astronaut]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    action === RouterAction.NEW ? executeCreate() : executeUpdate();
  };
  return <UiForm onSubmit={onSubmit} validationSchema={astronautCreate} />;
}
