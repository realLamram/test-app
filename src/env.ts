import "dotenv/config";

// export const NODE_ENV = process.env.NODE_ENV || "development";
// export const isDev = NODE_ENV === "development";

export const SERVER_PORT = process.env.SERVER_PORT || 8080;
export const PUBLIC_DIR = process.env.PUBLIC_DIR || "./public";
export const DATABASE_URL = process.env.DATABASE_URL;
export const API_URL = process.env.API_URL;
export const OMDB_API_KEY = process.env.OMDB_API_KEY;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const COOKIE_KEY = process.env.COOKIE_KEY || "secret";
export const REDIRECT_URI = process.env.REDIRECT_URI || "http://localhost:3000";
