import cookieParser from "cookie-parser";
import express from "express";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import { createYoga } from "graphql-yoga";
import { join, resolve } from "path";
import { ENDPOINT as graphqlEndpoint } from "../api";
import { PUBLIC_DIR, SERVER_PORT } from "../env";
import { authGoogle, checkLogin, checkToken, logout, refreshToken } from "./authorization";
import { builder } from "./builder";
import "./schema";

export const app = express();

app.use(cookieParser());
app.use(express.static(PUBLIC_DIR));
app.use(express.json());
app.set("x-powered-by", false);

app.post("/auth/google", authGoogle);
// app.get("/auth/google", authGoogleUrl);
app.post("/checktoken", checkToken);
app.get("/checklogin", checkLogin);
app.get("/logout", logout);
app.get("/refresh-token", refreshToken);

const schema = builder.toSchema();
const yoga = createYoga({
  graphqlEndpoint,
  schema: schema,
});

app.use(graphqlEndpoint, graphqlUploadExpress({ maxFileSize: 512000, maxFiles: 1 }), yoga);

app.use("*", (_, res) => {
  res.sendFile(resolve(join(PUBLIC_DIR, "index.html")));
});

app.listen(SERVER_PORT, () => console.log(`App is listening on port ${SERVER_PORT}.`));
