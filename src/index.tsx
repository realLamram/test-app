import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, cacheExchange, createClient, fetchExchange, mapExchange } from "urql";
import Router from "./client/App/Router/Router";
import "./i18n";
import ReactGA from "react-ga";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from "./client/App/User/UserProvider";
import Cookies from "js-cookie";

ReactGA.initialize("UA-293452339-1");
ReactGA.pageview(window.location.pathname + window.location.search);

export const url = "http://127.0.0.1:3000";

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
  fetchOptions: () => {
    const token = Cookies.get("at");
    return { headers: token ? { Authorization: `${token}` } : undefined };
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <GoogleOAuthProvider clientId="261020236004-li376i1j9fmnori34uiee235d0n9u268.apps.googleusercontent.com">
        <UserProvider>
          <Router />
        </UserProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
