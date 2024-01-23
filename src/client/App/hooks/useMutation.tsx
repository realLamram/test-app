import { DocumentNode } from "graphql";
import { useNavigate } from "react-router";
import { useMutation as useUrqlMutation } from "urql";
import { translate } from "../../../i18n/utils";
import { flattenObject } from "../../utils";
import { useToast, useValidation } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import { useUser } from "../User";

export default function useMutation(doc: DocumentNode) {
  const navigate = useNavigate();
  const { isValid } = useValidation();
  const { setOpenToast, setToastMessage, setSeverity } = useToast();
  const { setUser } = useUser();

  const [result, executeMutation] = useUrqlMutation(doc);
  const { fetching, data, error } = result;

  const execDelete = async ({ id, path }: { id?: string; path?: string }): Promise<any> => {
    const res = await executeMutation({ id, path });
    if (!res.error) {
      setOpenToast(true);
      setToastMessage(translate("successDelete"));
      setSeverity(Severity.Success);
    } else {
      setOpenToast(true);
      setToastMessage(translate("errorDelete"));
      setSeverity(Severity.Error);
      navigate("/");
      setUser(null);
    }
  };

  const execMutation = async (validationSchema: any, data: any): Promise<boolean> => {
    const flatInput = flattenObject({ ...data });

    const valid = await isValid(validationSchema, flatInput);

    if (valid) {
      const res = await executeMutation(data);
      if (!res.error) {
        setOpenToast(true);
        setToastMessage(translate("successSave"));
        setSeverity(Severity.Success);
      } else {
        setOpenToast(true);
        setToastMessage(translate("errorSave"));
        setSeverity(Severity.Error);
      }
    } else {
      setOpenToast(true);
      setToastMessage(translate("errorSave"));
      setSeverity(Severity.Error);
    }

    return valid;
  };

  return { fetching, data, error, executeMutation, execMutation, execDelete };
}
