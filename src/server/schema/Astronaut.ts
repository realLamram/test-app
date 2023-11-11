import { clientPrisma } from "../../prisma";
import { builder } from "../builder";

export const Astronaut = builder.prismaObject("Astronaut", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    surName: t.exposeString("surName"),
    birth: t.expose("birth", { type: "Date" }),
    skill: t.exposeString("skill"),
    active: t.exposeBoolean("active", { nullable: true }),
    hair: t.exposeString("hair", { nullable: true }),
    eyes: t.exposeString("eyes", { nullable: true }),
  }),
});

builder.queryField("astronaut", (t) => {
  return t.prismaField({
    type: Astronaut,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }: any) => {
      return clientPrisma.astronaut.findUniqueOrThrow({
        ...query,
        where: { id },
      });
    },
  });
});

builder.queryField("astronauts", (t) => {
  return t.prismaField({
    type: [Astronaut],
    nullable: true,
    args: {
      // orderBy: t.arg({ type: [BudgetProposalOrderByInput] }),
      search: t.arg.string(),
      skip: t.arg.int(),
      take: t.arg.int(),
      // where: t.arg({ type: BudgetProposalWhereInput }),
    },
    resolve: async (query, _, {}: any) => {
      return await clientPrisma.astronaut.findMany({
        ...query,
        where: { active: true },
      });
    },
  });
});

const AstronautInput = builder.inputType("AstronautInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    surName: t.string({ required: true }),
    birth: t.field({ type: "Date", required: true }),
    skill: t.string({ required: true }),
    hair: t.string(),
    eyes: t.string({ required: true }),
  }),
});

builder.mutationField("createAstronaut", (t) =>
  t.prismaField({
    type: Astronaut,
    args: {
      input: t.arg({ type: AstronautInput, required: true }),
    },

    resolve: async (query, _, { input }) => {
      const user = await clientPrisma.astronaut.create({
        ...query,
        data: { ...input, active: true },
      });
      return user;
    },
  })
);

builder.mutationField("updateAstronaut", (t) =>
  t.prismaField({
    type: Astronaut,
    args: {
      id: t.arg.id({ required: true }),
      input: t.arg({ type: AstronautInput, required: true }),
    },

    resolve: async (query, _, { id, input }) => {
      const user = await clientPrisma.astronaut.update({
        ...query,
        data: input,
        where: { id: id ? String(id) : "" },
      });
      return user;
    },
  })
);

builder.mutationField("destroyAstronaut", (t) =>
  t.prismaField({
    type: Astronaut,
    args: {
      id: t.arg.id({ required: true }),
    },

    resolve: async (query, _, { id }) => {
      const user = await clientPrisma.astronaut.update({
        ...query,
        data: { active: false },
        where: { id: id ? String(id) : "" },
      });
      return user;
    },
  })
);
