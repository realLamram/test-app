import { createContext } from "react";
import { Fields } from "../ui/utils";

export type ValidationContextType = {
  setInput: ({ name, value }: { name: string; value: any }) => void;
  isValid: (fields?: Fields) => boolean;
};

const ValidationContext = createContext<ValidationContextType>({} as ValidationContextType);

export default ValidationContext;
