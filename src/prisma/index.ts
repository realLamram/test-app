import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "./generated";
export * from "./generated";

export const clientPrisma = new PrismaClient();
