import { UserRole } from "@prisma/client";
import axios from "axios";
import Cookies from "js-cookie";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Data } from "../../ui/utils";
import UserContext from "./UserContext";

export type UserProviderProps = React.PropsWithChildren & {};

export default function UserProvider(props: UserProviderProps): ReactElement {
  const [user, setUser] = useState<Data>({});
  const { id, name, picture, email, email_verified, access_token, roles } = user || {};
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    const checkUser = async () => {
      const at = Cookies.get("at");
      if (at) {
        const user = await axios.get(`/checklogin`, {
          withCredentials: true,
        });
        if (user.data) {
          setUser(user.data);
        }
      } else {
        setUser({});
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    if ((user?.email && user?.email_verified && Cookies.get("at"), Cookies.get("idt"))) {
      intervalIdRef.current = intervalId;
    }

    if (!Cookies.get("at")) {
      intervalIdRef.current && clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [user]);

  const can = (canRoles?: UserRole[]): boolean => {
    if (!canRoles || !canRoles.length) return true;
    if (!Cookies.get("at")) return false;
    if (!Cookies.get("idt")) return false;

    if (canRoles.some((item) => user.roles?.includes(item))) {
      return true;
    }

    return false;
  };

  return (
    <UserContext.Provider
      value={{
        id,
        user,
        roles,
        access_token,
        name,
        picture,
        email,
        email_verified,
        setUser,
        can,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
