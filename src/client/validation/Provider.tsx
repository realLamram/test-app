import { PropsWithChildren, ReactElement } from "react";
import useContextComponents from "../context/useComponent";
import { Fields } from "../ui/utils";
import ValidationContext from "./Context";
import yupValidation from "./yupValidation";

export type ValidationProviderProps = PropsWithChildren<any>;

export default function ValidationProvider({ children }: ValidationProviderProps): ReactElement {
  const { components, setComponents } = useContextComponents();

  const setInput = ({ name, value }: { name: string; value: any }) => {
    setComponents({
      ...components,
      [name]: { ...components[name], value, error: false, helperText: undefined },
    });
  };

  const isValid = async (
    schema?: any,
    input?: { [key: string]: any },
    fields?: Fields
  ): Promise<boolean> => {
    let newComponents: Fields = fields || components;

    const { isValid, errorPaths, errorMessages } = await yupValidation(schema, input);

    errorPaths?.forEach((name: string, idx: number) => {
      newComponents = {
        ...newComponents,
        [name]: { ...components[name], error: true, helperText: errorMessages?.[idx] },
      };
    });

    setComponents(newComponents);
    return isValid;
  };

  return (
    <ValidationContext.Provider value={{ setInput, isValid }}>
      {children}
    </ValidationContext.Provider>
  );
}
