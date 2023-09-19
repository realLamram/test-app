import * as dotenv from "dotenv";

// dotenv.config({ path: "../env" });
// dotenv.config({ path: __dirname + "/.env" });

export const SERVER_PORT = process.env.SERVER_PORT || 3101;

export const NODE_ENV = process.env.NODE_ENV || "development";

export const PUBLIC_DIR = process.env.PUBLIC_DIR || "./public";

export const isDev = NODE_ENV === "development";

export const DATABASE_URL = process.env.DATABASE_URL;

export const API_URL = process.env.API_URL || "http://localhost:3101/api";
