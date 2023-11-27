import { DocumentNode } from "graphql";
import { useMutation as useUrqlMutation } from "urql";
import { translate } from "../../../i18n/utils";
import { flattenObject } from "../../utils";
import { useToast, useValidation } from "../../validation";
import { Severity } from "../../validation/ToastContext";

export default function useMutation(doc: DocumentNode) {
  const { isValid } = useValidation();
  const { setOpenToast, setToastMessage, setSeverity } = useToast();

  const [result, executeMutation] = useUrqlMutation(doc);
  const { fetching, data, error } = result;

  const execDelete = async ({ id, path }: { id?: string; path?: string }): Promise<any> => {
    try {
      await executeMutation({ id, path });
      setOpenToast(true);
      setToastMessage(translate("successDelete"));
      setSeverity(Severity.Success);
    } catch (error) {
      setOpenToast(true);
      setToastMessage(translate("errorSave"));
      setSeverity(Severity.Error);
    }
  };

  const execMutation = async (validationSchema: any, data: any): Promise<boolean> => {
    const flatInput = flattenObject({ ...data });

    const valid = await isValid(validationSchema, flatInput);

    if (valid) {
      executeMutation(data);
    }
    return valid;
  };

  return { fetching, data, error, executeMutation, execMutation, execDelete };
}
