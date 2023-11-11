import { DocumentNode } from "graphql";
import { useQuery as urqlUseQuery } from "urql";
import { Data } from "../../ui/utils";

export type DataContextType<TData = Data> = {
  data: TData;
  setData: (data: Partial<TData>) => void;
  type: string;
};

export default function useData<TData = Data>(props: {
  doc: DocumentNode;
  variables?: Record<string, any>;
  pause?: boolean;
}) {
  const { doc, variables, pause } = props;
  const [{ data, error, fetching }] = urqlUseQuery({ query: doc, variables, pause });

  return { error, data, fetching };
}
