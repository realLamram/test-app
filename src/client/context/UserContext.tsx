import { Dispatch, SetStateAction, createContext } from "react";
import { UserRole } from "../utils";

export type UserContextType = {
  userRole: UserRole | null;
  setUserRole: Dispatch<SetStateAction<UserRole | null>>;
  customerView: boolean;
  setCustomerView: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
