import { useContext } from "react";
import UserContext, { UserContextType } from "./UserContext";

export default function useUser<Data>() {
  const context = useContext<UserContextType>(UserContext);
  return context;
}
