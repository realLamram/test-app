import { clientPrisma } from "../../prisma";
import { builder } from "../builder";

export const Employee = builder.prismaObject("Employee", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    surName: t.exposeString("surName"),
    birth: t.expose("birth", { type: "Date" }),
    skill: t.exposeString("skill", { nullable: true }),
    active: t.exposeBoolean("active", { nullable: true }),
  }),
});

builder.queryField("employee", (t) => {
  return t.prismaField({
    type: Employee,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }: any) => {
      return clientPrisma.employee.findUniqueOrThrow({
        ...query,
        where: { id },
      });
    },
  });
});

builder.queryField("employees", (t) => {
  return t.prismaField({
    type: [Employee],
    nullable: true,
    args: {
      // orderBy: t.arg({ type: [BudgetProposalOrderByInput] }),
      search: t.arg.string(),
      skip: t.arg.int(),
      take: t.arg.int(),
      // where: t.arg({ type: BudgetProposalWhereInput }),
    },
    resolve: async (query, _, {}: any) => {
      return await clientPrisma.employee.findMany({
        ...query,
        where: { active: true },
      });
    },
  });
});

const EmployeeInput = builder.inputType("EmployeeInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    surName: t.string({ required: true }),
    birth: t.field({ type: "Date", required: true }),
    skill: t.string(),
  }),
});

builder.mutationField("createEmployee", (t) =>
  t.prismaField({
    type: Employee,
    args: {
      input: t.arg({ type: EmployeeInput, required: true }),
    },

    resolve: async (query, _, { input }) => {
      const user = await clientPrisma.employee.create({
        ...query,
        data: { ...input, active: true },
      });
      return user;
    },
  })
);

builder.mutationField("updateEmployee", (t) =>
  t.prismaField({
    type: Employee,
    args: {
      id: t.arg.id({ required: true }),
      input: t.arg({ type: EmployeeInput, required: true }),
    },

    resolve: async (query, _, { id, input }) => {
      const user = await clientPrisma.employee.update({
        ...query,
        data: input,
        where: { id: id ? String(id) : "" },
      });
      return user;
    },
  })
);

builder.mutationField("destroyEmployee", (t) =>
  t.prismaField({
    type: Employee,
    args: {
      id: t.arg.id({ required: true }),
    },

    resolve: async (query, _, { id }) => {
      const user = await clientPrisma.employee.update({
        ...query,
        data: { active: false },
        where: { id: id ? String(id) : "" },
      });
      return user;
    },
  })
);
