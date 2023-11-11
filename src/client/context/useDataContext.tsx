import { useContext } from "react";
import DataContext from "./DataContext";

export default function useDataContext<Data>() {
  const context = useContext(DataContext);
  return context;
}
