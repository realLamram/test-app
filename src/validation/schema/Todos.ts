import { object, string } from "yup";
import { translate } from "../../i18n/utils";

export const todoCreate = object({
  userId: string().uuid().required(),
  title: string().required(translate("requiredField")),
});

export const todoUpdate = object({
  title: string().required(translate("requiredField")),
});
