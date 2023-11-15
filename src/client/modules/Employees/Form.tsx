import { ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CreateEmployeeDocument,
  EmployeeDocument,
  UpdateEmployeeDocument,
} from "../../../api/gql/graphql";
import { employeeCreate, employeeUpdate } from "../../../validation/schema/Employees";
import { RouterAction } from "../../App/Router/utils";
import { useData, useLoaderData, useMutation } from "../../App/hooks";
import useContextData from "../../context/useComponent";
import { DatePicker } from "../../ui/DatePicker";
import { Form as UiForm } from "../../ui/Form";
import { InputString } from "../../ui/Input";
import { Fields } from "../../ui/utils";

export enum FieldNames {
  NAME = "name",
  SURNAME = "surName",
  SKILL = "skill",
  BIRTH = "birth",
}

const fields: Fields = {
  [FieldNames.NAME]: { Component: InputString },
  [FieldNames.SURNAME]: { Component: InputString },
  [FieldNames.SKILL]: { Component: InputString },
  [FieldNames.BIRTH]: { Component: DatePicker },
};
export default function Form(): ReactElement {
  const { resource, action } = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const { components, setComponents } = useContextData();

  const { data: qData } = useData({
    doc: EmployeeDocument,
    variables: { id: params.employeeId },
    pause: Boolean(!params.employeeId),
  });
  const employee = qData?.employee;

  const { execMutation: updateMutation } = useMutation(UpdateEmployeeDocument);
  const { execMutation: createMutation } = useMutation(CreateEmployeeDocument);

  const executeCreate = async () => {
    const data = {
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
      },
    };

    const isValid = await createMutation(employeeCreate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
  };

  const executeUpdate = async () => {
    const data = {
      id: params.employeeId,
      input: {
        name: components.name.value,
        surName: components.surName.value,
        skill: components.skill.value,
        birth: components.birth.value,
      },
    };

    const isValid = await updateMutation(employeeUpdate, data);

    if (isValid) {
      navigate(`/${resource}`);
    }
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
    action === RouterAction.NEW ? executeCreate() : executeUpdate();
  };
  return <UiForm onSubmit={onSubmit} validationSchema={employeeCreate} />;
}
