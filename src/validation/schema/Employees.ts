import { boolean, date, object, string } from "yup";
import { translate } from "../../i18n/utils";

export const employeeCreate = object({
  name: string().required(translate("requiredField")),
  surName: string().required(translate("requiredField")),
  skill: string().nullable(),
  birth: date().max(new Date(), translate("notFuture")).required(translate("requiredField")),
  active: boolean().nullable().default(true),
});

export const employeeUpdate = object({
  id: string().uuid().required(),
  name: string().required(translate("requiredField")),
  surName: string().required(translate("requiredField")),
  skill: string().nullable(),
  birth: date().max(new Date(), translate("notFuture")).required(translate("requiredField")),
  active: boolean().nullable().default(true),
});
