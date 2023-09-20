import { ReactElement } from "react";
import { LoaderFunctionArgs, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Loader, children } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: <Layout />,
    errorElement: <div>Something is wrong!</div>,
    children,
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
]);

export default function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
