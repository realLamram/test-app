import { useContext } from "react";
import ComponentContext, { ComponentContextType } from "./ComponentContext";

export default function useComponent() {
  const context = useContext<ComponentContextType>(ComponentContext);
  return context;
}
