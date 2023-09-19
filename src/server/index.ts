import express from "express";
import { createYoga } from "graphql-yoga";
import { join, resolve } from "path";
import { ENDPOINT as graphqlEndpoint } from "../api";
import { PUBLIC_DIR, SERVER_PORT } from "../env";
import { builder } from "./builder";
import "./schema";

const app = express();

app.use(express.static(PUBLIC_DIR));

app.set("x-powered-by", false);

const schema = builder.toSchema();
const yoga = createYoga({
  graphqlEndpoint,
  schema: schema,
});

app.use(graphqlEndpoint, yoga);

app.use("*", (_, res) => {
  res.sendFile(resolve(join(PUBLIC_DIR, "index.html")));
});

app.listen(SERVER_PORT, () => console.log(`App is listening on port ${SERVER_PORT}.`));
