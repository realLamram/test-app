import SchemaBuilder from "@pothos/core";
import AddGraphQLPlugin from "@pothos/plugin-add-graphql";
import PrismaPlugin from "@pothos/plugin-prisma";
import { clientPrisma } from "../prisma";
import type PrismaTypes from "./generated";
import { DateResolver } from "graphql-scalars";

// export type Context = {
//   // can: (action: string, subject: string, field?: string | any, data?: any) => boolean;
//   db: PrismaClient;
//   // publish: <T extends keyof Channels>(channel: T, message: Channels[T]) => Promise<number>;
//   // subscribe: <T extends keyof Channels>(
//   //   channel: T,
//   //   filter?: (message: Channels[T]) => Promise<boolean>,
//   //   initMessage?: Channels[T]
//   // ) => AsyncIterableIterator<Channels[T]>;
//   // user: User;
//   // validate: Validator["validate"];
// };

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

builder.addScalarType("Date", DateResolver, {});
