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
    ID: { Input: string; Output: string };
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

const FileUpload = new GraphQLScalarType({
  name: "Upload",
  description: "A file upload.",
  parseValue(value) {
    return value;
  },
  serialize(value) {
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return null;
  },
});

builder.addScalarType("Date", DateResolver, {});
builder.addScalarType("Upload", GraphQLUpload, {});
