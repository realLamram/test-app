import { PropsWithChildren, ReactElement } from "react";
import useContextComponents from "../context/useComponent";
import { FieldNames } from "../modules/Employees/Form";
import { Fields } from "../ui/utils";
import ValidationContext from "./Context";

export type ValidationProviderProps = PropsWithChildren<any>;

export default function ValidationProvider({ children }: ValidationProviderProps): ReactElement {
  const { components, setComponents } = useContextComponents();

  const setInput = ({ name, value }: { name: string; value: any }) => {
    setComponents({ ...components, [name]: { ...components[name], value, error: false } });
  };

  const isValid = (fields?: Fields): boolean => {
    let newComponents: Fields = {};
    let isValid = true;

    for (const name in fields ?? components) {
      const req = components[name].required;
      const val = components[name].value;
      if (req && (val === "" || !val)) {
        newComponents = { ...newComponents, [name]: { ...components[name], error: true } };
        isValid = false;
      } else {
        newComponents = { ...newComponents, [name]: { ...components[name], error: false } };
      }
    }
    setComponents(newComponents);
    return isValid;
  };

  return (
    <ValidationContext.Provider value={{ setInput, isValid }}>
      {children}
    </ValidationContext.Provider>
  );
}
