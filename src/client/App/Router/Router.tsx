import { ReactElement } from "react";
import { LoaderFunctionArgs, Params, RouterProvider, createBrowserRouter } from "react-router-dom";
import { IndexView } from "../../ui/View";
import App from "../App";
import { astronauts, books, employees, films, gallery, login, swapi } from "./routes";
import { Resource, RouterAction } from "./utils";

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

const router = () => {
  return createBrowserRouter([
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
        ...films(),
        ...gallery(),
        ...swapi(),
        ...login(),
        {
          path: "*",
          // element: <Navigate to="/" />,
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
};

export default function Router(): ReactElement {
  return <RouterProvider router={router()} />;
}
