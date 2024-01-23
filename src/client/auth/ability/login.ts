import { User } from "@prisma/client";

// export type AbilitySubject<TUser> = Ability<TUser>["canSubject"];

export default function defineLoginAbility(can: any): void {
  // can("read", [isAdmin, isUser].some(true));
  // can("create", some(isPersonnel, isAdmin));
  // can(["update", "close"], every(some(isPersonnel, isAdmin), hasStatusPending));
}
