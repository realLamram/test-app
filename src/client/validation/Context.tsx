import { createContext } from "react";

export type ValidationContextType = {
  setInput: ({ name, value }: { name: string; value: any }) => void;
  isValid: (schema?: any, input?: any, fields?: any) => Promise<boolean>;
};

const ValidationContext = createContext<ValidationContextType>({} as ValidationContextType);

export default ValidationContext;
