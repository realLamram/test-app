import { ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CreateEmployeeDocument,
  EmployeeDocument,
  UpdateEmployeeDocument,
} from "../../../api/gql/graphql";
import { RouterAction } from "../../App/Router/utils";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import useContextData from "../../context/useComponent";
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
}

const fields: Fields = {
  [FieldNames.NAME]: { required: true, Component: InputString },
  [FieldNames.SURNAME]: { required: true, Component: InputString },
  [FieldNames.SKILL]: { required: false, Component: InputString },
  [FieldNames.BIRTH]: { required: true, Component: DatePicker },
};
export default function Form(): ReactElement {
  const { resource, action } = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const { isValid } = useValidation();
  const { components, setComponents } = useContextData();

  const { data: qData } = useData({
    doc: EmployeeDocument,
    variables: { id: params.employeeId },
    pause: Boolean(!params.employeeId),
  });
  const employee = qData?.employee;

  const { executeMutation: createMutation } = useMutation(CreateEmployeeDocument);
  const { executeMutation: updateMutation } = useMutation(UpdateEmployeeDocument);

  const executeCreate = () => {
    createMutation({
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
      },
    });
  };
  const executeUpdate = () => {
    updateMutation({
      id: params.employeeId,
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
      },
    });
  };

  useEffect(() => {
    if (employee) {
      let dataFields = {};
      const data: any = employee;
      if (data)
        for (const key in fields) {
          dataFields = { ...dataFields, [key]: { ...fields[key], value: data[key] } };
        }

      setComponents(dataFields);
    } else {
      setComponents(fields);
    }
  }, [fields, employee]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (isValid()) {
      action === RouterAction.NEW ? executeCreate() : executeUpdate();
      navigate(`/${resource}`);
    }
  };
  return <UiForm onSubmit={onSubmit} />;
}
