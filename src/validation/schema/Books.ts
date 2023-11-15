import { mixed, number, object, string } from "yup";
import { translate } from "../../i18n/utils";

export const bookCreate = object({
  authorId: string().uuid().required(),
  title: string().required(translate("requiredField")),
  released: number().integer().required(translate("requiredField")),
  file: mixed()
    .test("file", translate("forbiddenFormat"), (value) => {
      return value instanceof File && (value.type === "image/jpeg" || value.type === "image/png");
    })
    .required(translate("requiredField")),
});

export const bookUpdate = object({
  id: string().uuid().required(),
  title: string().required(translate("requiredField")),
  released: number().integer().required(translate("requiredField")),
  file: mixed().test("file", translate("forbiddenFormat"), (value) => {
    return (
      (value instanceof File && (value.type === "image/jpeg" || value.type === "image/png")) ||
      value === undefined
    );
  }),
});
