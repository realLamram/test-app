import { User, UserRole } from "@prisma/client";

export const getRole = (role: UserRole, id?: string): string => (id ? `${role}[${id}]` : role);

// export const hasRole = (user: User, role: UserRole, id?: string): boolean =>
//   user.roles.includes(getRole(role, id));

// export const isAdmin = (user: User): boolean => hasRole(user, UserRoleType.Administrator);

export const isOwner = (user: User, data: any): boolean => user.id === data?.employee?.id;
