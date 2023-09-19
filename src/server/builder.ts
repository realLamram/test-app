import SchemaBuilder from "@pothos/core";
import AddGraphQLPlugin from "@pothos/plugin-add-graphql";
import PrismaPlugin from "@pothos/plugin-prisma";
import { clientPrisma } from "../prisma";
import type PrismaTypes from "./generated";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
}>({
  plugins: [PrismaPlugin, AddGraphQLPlugin],
  prisma: {
    client: clientPrisma,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
  },
});
