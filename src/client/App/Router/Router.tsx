import { ReactElement } from "react";
import { LoaderFunctionArgs, Params, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { IndexView } from "../../ui/View";
import { Resource, RouterAction } from "./utils";
import employees from "./routes/employees";
import astronauts from "./routes/astronauts";
import books from "./routes/books";

export type RouterChildren = {
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Something is wrong!</div>,
    children: [
      {
        path: "",
        element: <IndexView />,
        loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
          resource: Resource.HOME,
          action: RouterAction.INDEX,
          params,
        }),
        errorElement: <div>Something is wrong!</div>,
      },
      ...books(),
      ...astronauts(),
      ...employees(),
      {
        path: "*",
        element: <div>Not found!</div>,
        loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
          resource: "notfound",
          action: "index",
          params,
        }),
      },
    ],
  },
]);

export default function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
