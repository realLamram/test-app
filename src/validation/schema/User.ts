import { object, string } from "yup";

export const userRoleUpdate = object({
  id: string().uuid().required(),
  role: string().required(),
});
