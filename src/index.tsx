import React from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App/App";
import { Provider, cacheExchange, createClient, fetchExchange, mapExchange } from "urql";
// import "./utils/i18n";

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
      <App />
    </Provider>
  </React.StrictMode>
);
