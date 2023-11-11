import SchemaBuilder from "@pothos/core";
import AddGraphQLPlugin from "@pothos/plugin-add-graphql";
import PrismaPlugin from "@pothos/plugin-prisma";
// import { PrismaClient, clientPrisma } from "../prisma";
import { clientPrisma } from "../prisma";
import type PrismaTypes from "./generated";
import { DateResolver } from "graphql-scalars";
import { FileUpload, GraphQLUpload } from "graphql-upload-minimal";
import { GraphQLScalarType, Kind } from "graphql";

// export type Context = {
//   db: PrismaClient;
// };

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: { Input: Date; Output: Date };
    // File: { Input: File; Output: never };
    ID: { Input: string; Output: string };
    // Upload: {
    //   Input: File;
    //   Output: File;
    // };
    Upload: {
      Input: Promise<FileUpload>;
      Output: Promise<FileUpload>;
    };
    BigInt: {
      Input: bigint;
      Output: bigint;
    };
  };
}>({
  plugins: [PrismaPlugin, AddGraphQLPlugin],
  prisma: {
    client: clientPrisma,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
  },
});

// Definujte skalární typ FileUpload
const FileUpload = new GraphQLScalarType({
  name: "Upload",
  description: "A file upload.",
  parseValue(value) {
    // Implementace zpracování hodnoty při přijetí, pokud je potřeba
    return value;
  },
  serialize(value) {
    // Implementace serializace hodnoty, pokud je potřeba
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // Implementace zpracování literálu, pokud je potřeba
      return ast.value;
    }
    return null;
  },
});

builder.addScalarType("Date", DateResolver, {});
// builder.addScalarType("Upload", FileUpload, {});
builder.addScalarType("Upload", GraphQLUpload, {});
