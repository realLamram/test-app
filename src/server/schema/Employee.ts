import { clientPrisma } from "../../prisma";
import { builder } from "../builder";

export const Employee = builder.prismaObject("Employee", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    surName: t.exposeString("surName"),
    birth: t.expose("birth", { type: "Date" }),
    skill: t.exposeString("skill", { nullable: true }),
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
    resolve: async (query) => {
      return clientPrisma.employee.findMany({
        ...query,
      });
    },
  });
});

const EmployeeCreateInput = builder.inputType("EmployeeCreateInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    surName: t.string({ required: true }),
    birth: t.field({ type: "Date", required: true }),
    skill: t.string(),
  }),
});

builder.mutationField("createUser", (t) =>
  t.prismaField({
    type: Employee,
    args: {
      input: t.arg({ type: EmployeeCreateInput, required: true }),
    },

    resolve: async (query, _, { input }) => {
      const data = {
        ...input,
      };
      const user = await clientPrisma.employee.create({ ...query, data });
      return user;
    },
  })
);
