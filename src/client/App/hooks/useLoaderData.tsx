import { useLoaderData as reactUseLoaderData } from "react-router-dom";
import { Loader } from "../Router/Router";

export default function useLoaderData(): Loader {
  const loader = reactUseLoaderData() as Loader;
  const { resource, action, params } = loader || {};

  return { resource, action, params };
}
