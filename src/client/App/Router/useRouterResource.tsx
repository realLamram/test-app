import { useContext, useEffect } from "react";
import RouterContext from "./Context";
import { useLoaderData } from "../hooks";

export default function useRouterResource() {
  const loader = useLoaderData();
  const { resource, action, params } = loader;
  const { setResource, setAction, setParams } = useContext(RouterContext);
  useEffect(() => {
    setResource(loader.resource);
    setAction(loader.action);
    setParams(loader.params);
  }, [resource, action, params]);
}
