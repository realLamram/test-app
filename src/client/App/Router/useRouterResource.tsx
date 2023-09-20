import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import RouterContext from "./Context";
import { Loader } from "./routes";

export default function useRouterResource() {
  const loader = useLoaderData() as Loader;
  const { resource, action, params } = loader;
  const { setResource, setAction, setParams } = useContext(RouterContext);
  useEffect(() => {
    setResource(loader.resource);
    setAction(loader.action);
    setParams(loader.params);
  }, [resource, action, params]);
}
