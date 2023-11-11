import React, { ReactElement, useContext, useEffect, useState } from "react";
import DataContext from "./DataContext";
import { Data } from "../ui/utils";
// import { Data, useData } from "./utils";
// import { ComponentParams } from "../Component";

export type DataProviderProps = React.PropsWithChildren & {
  data: any;
  type?: string;
};

export default function DataProvider(props: DataProviderProps): ReactElement {
  //   const type = props.type ?? useData().type ?? useContext(ComponentParams).resource;
  const type = undefined;
  const [data, setValue] = useState<Data>(props.data);
  const setData = (newData: Data): void => {
    setValue({ ...data, ...newData });
  };

  useEffect(() => {
    setValue(props.data);
  }, [props.data]);
  return (
    <DataContext.Provider value={{ data, setData, type }}>{props.children}</DataContext.Provider>
  );
}
