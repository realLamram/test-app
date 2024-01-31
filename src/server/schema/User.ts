import { clientPrisma } from "../../prisma";
import { builder } from "../builder";
import { checkAuth } from "../utils";
import { RoleType } from "./Role";

export const User = builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    surName: t.exposeString("surName", { nullable: true }),
    fullName: t.exposeString("fullName", { nullable: true }),
    email: t.exposeString("email"),
    // roles: t.relation("roles"),
    roles: t.field({
      select: () => ({
        roles: {
          select: {
            type: true,
          },
        },
      }),
      type: [RoleType],
      resolve: (user) => user.roles.map((role) => role.type),
    }),
    loginType: t.exposeString("loginType"),
  }),
});

// builder.queryField("user", (t) => {
//   return t.prismaField({
//     type: User,
//     nullable: true,
//     args: {
//       id: t.arg.id({ required: true }),
//     },
//     resolve: async (query, _, { id }: any) => {
//       return clientPrisma.user.findUniqueOrThrow({
//         ...query,
//         where: { id },
//       });
//     },
//   });
// });

builder.queryField("users", (t) => {
  return t.prismaField({
    type: [User],
    nullable: true,
    args: {
      // orderBy: t.arg({ type: [BudgetProposalOrderByInput] }),
      search: t.arg.string(),
      // skip: t.arg.int(),
      // take: t.arg.int(),
      // where: t.arg({ type: BudgetProposalWhereInput }),
    },
    resolve: async (query, _, args: any, context: any) => {
      const { search } = args;
      try {
        await checkAuth(context);

        return await clientPrisma.user.findMany({
          ...query,
        });
      } catch (error: any) {
        console.error("Chyba při získávání uživatelů:", error.message);
        throw new Error("Chyba při získávání uživatelů");
      }
    },
  });
});

const UserRoleInput = builder.inputType("UserRoleInput", {
  fields: (t) => ({
    id: t.id({ required: true }),
    role: t.field({ type: RoleType, required: true }),
  }),
});

builder.mutationField("userRoleUpdate", (t) =>
  t.prismaField({
    type: User,
    args: {
      input: t.arg({ type: UserRoleInput, required: true }),
    },
    resolve: async (query, _, args, context) => {
      const { id, role } = args.input;
      console.log("ChangeRoleeeee");
      try {
        await checkAuth(context);

        const user = await clientPrisma.user.update({
          ...query,
          data: {
            roles: {
              set: [role as any],
            },
          },
          where: { id },
        });

        return user;
      } catch (error: any) {
        console.error("Chyba při ukládání změny user role:", error.message);
        throw new Error("Unauthorized");
      }
    },
  })
);
