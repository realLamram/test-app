import { useLoaderData as reactUseLoaderData } from "react-router-dom";
import { Loader } from "../Router/Router";

export default function useLoaderData(): Loader {
  const { resource, action, params } = reactUseLoaderData() as Loader;

  return { resource, action, params };
}
