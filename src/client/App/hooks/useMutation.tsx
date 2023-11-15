import { DocumentNode } from "graphql";
import { useMutation as useUrqlMutation } from "urql";
import { useValidation } from "../../validation";
import { flattenObject } from "../../utils";

export default function useMutation(doc: DocumentNode) {
  const { isValid } = useValidation();
  const [{ fetching, data, error }, executeMutation] = useUrqlMutation(doc);

  const execMutation = async (validationSchema: any, data: any): Promise<boolean> => {
    const flatInput = flattenObject({ ...data });

    const valid = await isValid(validationSchema, flatInput);

    if (valid) {
      executeMutation(data);
    }
    return valid;
  };

  return { fetching, data, error, executeMutation, execMutation };
}
