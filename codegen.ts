import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3101/api",
  documents: "src/api/schema/**/*.graphql",
  generates: {
    "src/api/gql/": {
      preset: "client",
      plugins: [],
    },
    "./src/api/graphql.schema.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
    },
  },
};

export default config;
