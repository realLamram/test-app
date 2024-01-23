import { builder } from "../builder";

export const User = builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    surName: t.exposeString("surName", { nullable: true }),
    fullName: t.exposeString("fullName", { nullable: true }),
    email: t.exposeString("email"),
    roles: t.relation("roles"),
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
