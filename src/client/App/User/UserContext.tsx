import { createContext } from "react";
import { Data } from "../../ui/utils";
import { UserRole } from "@prisma/client";

export type UserContextType = {
  id: string;
  user: any;
  name?: string;
  picture?: string;
  roles?: UserRole[];
  setUser: (data: any) => void;
  email?: string;
  access_token?: string;
  email_verified?: boolean;
  can: (roles?: UserRole[]) => boolean;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
