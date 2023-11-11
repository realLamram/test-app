import { DocumentNode } from "graphql";
import { useMutation as useUrqlMutation } from "urql";

export default function useMutation(doc: DocumentNode) {
  const [{ fetching, data, error }, executeMutation] = useUrqlMutation(doc);
  return { fetching, data, error, executeMutation };
}
