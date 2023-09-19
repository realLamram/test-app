import { ReactElement } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { Client, createRequest, Provider, fetchExchange, gql } from "urql";
import { GetUserDocument } from "../../api/gql/graphql";
import Root from "./Root";

const u = GetUserDocument;

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Někde se stala chyba</div>,
    children: [
      {
        path: "/",
        // loader: async ({ request, params }) => loader({ request, params }, GET_ROOT_DATA),
        element: <Root />,
      },
      {
        path: "team",
        element: <></>,
      },
      { path: "*", element: <div>Nenalezeno</div> },
    ],
  },
]);

export default function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
