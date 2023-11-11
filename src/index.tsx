import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, cacheExchange, createClient, fetchExchange, mapExchange } from "urql";
import Router from "./client/App/Router/Router";
import "./i18n";

export const url = "http://localhost:3000";

const client = createClient({
  url: "http://localhost:3101/api",
  exchanges: [
    cacheExchange,
    mapExchange({
      onError(error: any) {
        console.error(error);
      },
    }),
    fetchExchange,
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <Router />
    </Provider>
  </React.StrictMode>
);
