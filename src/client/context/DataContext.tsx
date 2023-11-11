import { Dispatch, SetStateAction, createContext } from "react";
import { Data, Fields } from "../ui/utils";

// export type DataContextType = {
//   data: any[];
//   setData: Dispatch<SetStateAction<any>>;
// };

export type DataContextType<TData = Data> = {
  data: TData;
  setData: (data: Partial<TData>) => void;
  type?: string;
};

const DataContext = createContext<DataContextType<Data>>({} as DataContextType<Data>);

export default DataContext;
