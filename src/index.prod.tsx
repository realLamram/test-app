import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, cacheExchange, createClient, fetchExchange, mapExchange } from "urql";
import Router from "./client/App/Router/Router";
import "./i18n";
import ReactGA from "react-ga";

ReactGA.initialize("UA-293452339-1");
ReactGA.pageview(window.location.pathname + window.location.search);

export const url = "https://testapp-6884.rostiapp.cz";

const client = createClient({
  url: "https://testapp-6884.rostiapp.cz/api",
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
