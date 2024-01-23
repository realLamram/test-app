import { ReactElement } from "react";
import modules from "../../modules/modules";
import { RouterAction } from "../Router/utils";
import { useLoaderData } from ".";

export default function useComponents(): ReactElement | null {
  const { resource, action } = useLoaderData();

  const Component =
    resource && resource !== "notfound" ? modules[resource][action as RouterAction] : null;

  return <>{Component ? <Component /> : null}</>;
}
