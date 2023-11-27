import "dotenv/config";

// export const NODE_ENV = process.env.NODE_ENV || "development";
// export const isDev = NODE_ENV === "development";

export const SERVER_PORT = process.env.SERVER_PORT || 8080;
export const PUBLIC_DIR = process.env.PUBLIC_DIR || "./public";
export const DATABASE_URL = process.env.DATABASE_URL;
export const API_URL = process.env.API_URL;
export const OMDB_API_KEY = process.env.OMDB_API_KEY;
