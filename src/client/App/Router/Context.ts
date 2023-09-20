import { Dispatch, SetStateAction, createContext } from "react";
import { Params } from "react-router-dom";

export type RouterContextType = {
  resource?: string;
  setResource: Dispatch<SetStateAction<string | undefined>>;
  action?: string;
  setAction: Dispatch<SetStateAction<string | undefined>>;
  params?: Params<string>;
  setParams: Dispatch<SetStateAction<Params<string> | undefined>>;
};

const RouterContext = createContext<RouterContextType>({
  resource: undefined,
  setResource: () => {},
  action: undefined,
  setAction: () => {},
  params: undefined,
  setParams: () => {},
});

export default RouterContext;
