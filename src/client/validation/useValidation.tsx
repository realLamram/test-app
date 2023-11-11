import { useContext } from "react";
import ValidationContext, { ValidationContextType } from "./Context";

export default function useValidation() {
  const validation = useContext<ValidationContextType>(ValidationContext);
  return validation;
}
