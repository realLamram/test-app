import { UserRole } from "@prisma/client";
import { builder } from "../builder";

export const RoleType = builder.enumType("RoleType", { values: Object.values(UserRole) });

export const Role = builder.prismaObject("Role", {
  fields: (t) => ({
    id: t.exposeID("id"),
    user: t.relation("user"),
    type: t.expose("type", { type: RoleType }),
  }),
});
