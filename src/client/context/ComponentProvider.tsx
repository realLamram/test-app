import { PropsWithChildren, ReactElement, useState } from "react";
import { Fields } from "../ui/utils";
import ComponentContext from "./ComponentContext";

export type ComponentProviderProps = PropsWithChildren<any>;

export default function ComponentProvider({ children }: ComponentProviderProps): ReactElement {
  const [components, setComponents] = useState<Fields>();
  return (
    <ComponentContext.Provider value={{ components: components || {}, setComponents }}>
      {children}
    </ComponentContext.Provider>
  );
}
