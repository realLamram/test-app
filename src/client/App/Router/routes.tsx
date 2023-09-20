import { ReactElement } from "react";
import { LoaderFunctionArgs, Params } from "react-router-dom";
import Home from "../../modules/Home/Home";
import Employees from "../../modules/Employees/Employees";

export enum Resource {
  INDEX = "index",
  EMPLOYEES = "employees",
}

type RouterChildren = {
  path: string;
  element: ReactElement;
  loader?: any;
  errorElement?: ReactElement;
  children?: RouterChildren[];
};

export type Loader = {
  resource?: Resource | string;
  action?: string;
  params?: Params<string>;
};

export const children: RouterChildren[] = [
  {
    path: "",
    element: <Home />,
    loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
      resource: Resource.INDEX,
      action: "index",
      params,
    }),
    errorElement: <div>Something is wrong!</div>,
  },
  {
    path: "employees",
    element: <Employees />,
    loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
      resource: Resource.EMPLOYEES,
      action: "index",
      params,
    }),
  },

  {
    path: "*",
    element: <div>Not found!</div>,
    loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
      resource: "notfound",
      action: "index",
      params,
    }),
  },
];
