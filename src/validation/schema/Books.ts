import { mixed, number, object, string } from "yup";
import { translate } from "../../i18n/utils";

export const bookCreate = object({
  authorId: string().uuid().required(),
  title: string().required(translate("requiredField")),
  released: number().integer().required(translate("requiredField")),
  file: mixed()
    .test("file", translate("forbiddenFormat"), (value) => {
      if (value && Array.isArray(value)) {
        return value.every((file) => {
          return file instanceof File && (file.type === "image/jpeg" || file.type === "image/png");
        });
      }
      return true;
    })
    .required(translate("requiredField")),
});

export const bookUpdate = object({
  id: string().uuid().required(),
  title: string().required(translate("requiredField")),
  released: number().integer().required(translate("requiredField")),
  file: mixed().test("file", translate("forbiddenFormat"), (value) => {
    if (value && Array.isArray(value)) {
      return value.every((file) => {
        return file instanceof File && (file.type === "image/jpeg" || file.type === "image/png");
      });
    }
    return true;
  }),
});
