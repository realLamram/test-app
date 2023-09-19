import { Role, clientPrisma } from "../../prisma";
import { Context, builder } from "../builder";

export const User = builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    age: t.exposeInt("age"),
    role: t.expose("role", { type: RoleType }),
  }),
});

builder.queryField("user", (t) => {
  return t.prismaField({
    type: User,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _, { id }: any) => {
      return clientPrisma.user.findUniqueOrThrow({
        ...query,
        where: { id },
      });
    },
  });
});

builder.queryField("users", (t) => {
  return t.prismaField({
    type: [User],
    // nullable: true,
    args: {
      // orderBy: t.arg({ type: [BudgetProposalOrderByInput] }),
      search: t.arg.string(),
      skip: t.arg.int(),
      take: t.arg.int(),
      // where: t.arg({ type: BudgetProposalWhereInput }),
    },
    resolve: async (query, _, {}: any) => {
      return clientPrisma.user.findMany({
        ...query,
      });
    },
  });
});

export const RoleType = builder.enumType("RoleType", {
  values: Object.values(Role),
});

const UserCreateInput = builder.inputType("UserCreateInput", {
  fields: (t) => ({
    role: t.field({ type: RoleType, required: true }),
    age: t.int({ required: true }),
    name: t.string({ required: true }),
    email: t.string({ required: true }),
  }),
});

builder.mutationField("createUser", (t) =>
  t.prismaField({
    type: User,
    args: {
      input: t.arg({ type: UserCreateInput, required: true }),
    },

    resolve: async (query, _, { input }, { db }: any) => {
      const data = {
        ...input,
      };
      const user = await clientPrisma.user.create({ ...query, data });
      return user;
    },
  })
);
