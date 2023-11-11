import { Dispatch, SetStateAction, createContext } from "react";
import { Fields } from "../ui/utils";

export type ComponentContextType = {
  components: Fields;
  setComponents: Dispatch<SetStateAction<Fields | undefined>>;
};

const ComponentContext = createContext<ComponentContextType>({} as ComponentContextType);

export default ComponentContext;
