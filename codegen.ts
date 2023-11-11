import type { CodegenConfig } from "@graphql-codegen/cli";
// import { pluginSetTypes } from "./codegenPlugins";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "src/prisma/generated",
  schema: "http://localhost:3101/api",
  documents: "src/api/schema/**/*.graphql",
  generates: {
    "src/api/gql/": {
      preset: "client",
      // plugins: [],
      // plugins: ["typescript", "typescript-operations", "typed-document-node"],
      plugins: [],
    },
    "./src/api/graphql.schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
        // "@cdv/jazz-graphql-codegen",
      ],
      config: {
        enumsAsTypes: true,
        declarationKind: {
          type: "interface",
          input: "interface",
        },
      },
    },
  },
};

export default config;
