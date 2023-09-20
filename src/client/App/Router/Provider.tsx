import { PropsWithChildren, ReactElement, useState } from "react";
import { Params } from "react-router-dom";
import RouterContext from "./Context";

export type RouterProps = PropsWithChildren;

export default function RouterProvider(props: RouterProps): ReactElement {
  const { children } = props;

  const [resource, setResource] = useState<string | undefined>();
  const [action, setAction] = useState<string | undefined>();
  const [params, setParams] = useState<Params<string> | undefined>();

  return (
    <RouterContext.Provider value={{ resource, setResource, action, setAction, params, setParams }}>
      {children}
    </RouterContext.Provider>
  );
}
