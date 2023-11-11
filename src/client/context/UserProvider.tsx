import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { UserRole } from "../utils";
import UserContext from "./UserContext";

export type UserProviderProps = PropsWithChildren<any>;

export default function UserProvider({ children }: UserProviderProps): ReactElement {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const view = localStorage.getItem("view");
  const [customerView, setCustomerView] = useState<boolean>(view === "admin" ? false : true);

  useEffect(() => {
    const role = localStorage.getItem("userRole");

    if (role) {
      setUserRole(role as UserRole);
    } else {
      setUserRole(UserRole.USER);
    }
  }, []);

  useEffect(() => {
    if (localStorage && userRole) {
      localStorage.setItem("userRole", userRole);
    }
  }, [userRole]);

  useEffect(() => {
    if (localStorage && customerView !== null && customerView !== undefined) {
      localStorage.setItem("view", customerView ? "customer" : "admin");
    }
  }, [customerView]);

  return (
    <UserContext.Provider value={{ userRole, setUserRole, customerView, setCustomerView }}>
      {children}
    </UserContext.Provider>
  );
}
