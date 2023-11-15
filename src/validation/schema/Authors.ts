import { object, string } from "yup";
import { translate } from "../../i18n/utils";

export const authorCreate = object({
  name: string().required(translate("requiredField")),
  surName: string().required(translate("requiredField")),
});

export const authorUpdate = object({
  id: string().uuid().required(),
  name: string().required(translate("requiredField")),
  surName: string().required(translate("requiredField")),
});
