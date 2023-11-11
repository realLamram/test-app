import { ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CreateAstronautDocument,
  AstronautDocument,
  UpdateAstronautDocument,
} from "../../../api/gql/graphql";
import { RouterAction } from "../../App/Router/utils";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import useComponent from "../../context/useComponent";
import { DatePicker } from "../../ui/DatePicker";
import { Form as UiForm } from "../../ui/Form";
import { InputString } from "../../ui/Input";
import { Fields } from "../../ui/utils";
import useValidation from "../../validation/useValidation";

export enum FieldNames {
  NAME = "name",
  SURNAME = "surName",
  SKILL = "skill",
  BIRTH = "birth",
  HAIR = "hair",
  EYES = "eyes",
}

const fields: Fields = {
  [FieldNames.NAME]: { required: true, Component: InputString },
  [FieldNames.SURNAME]: { required: true, Component: InputString },
  [FieldNames.SKILL]: { required: true, Component: InputString },
  [FieldNames.BIRTH]: { required: true, Component: DatePicker },
  [FieldNames.HAIR]: { required: false, Component: InputString },
  [FieldNames.EYES]: { required: false, Component: InputString },
};
export default function Form(): ReactElement {
  const { resource, action } = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const { isValid } = useValidation();
  const { components, setComponents } = useComponent();

  const { data: qData } = useData({
    doc: AstronautDocument,
    variables: { id: params.astronautId },
    pause: Boolean(!params.astronautId),
  });
  const astronaut = qData?.astronaut;

  const { executeMutation: createMutation } = useMutation(CreateAstronautDocument);
  const { executeMutation: updateMutation } = useMutation(UpdateAstronautDocument);

  const executeCreate = () => {
    createMutation({
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
        hair: components.hair.value,
        eyes: components.eyes.value,
      },
    });
  };
  const executeUpdate = () => {
    updateMutation({
      id: params.astronautId,
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
        hair: components.hair.value,
        eyes: components.eyes.value,
      },
    });
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

    if (isValid()) {
      action === RouterAction.NEW ? executeCreate() : executeUpdate();
      navigate(`/${resource}`);
    }
  };
  return <UiForm onSubmit={onSubmit} />;
}
