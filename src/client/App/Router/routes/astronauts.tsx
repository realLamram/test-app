import { LoaderFunctionArgs } from "react-router-dom";
import { ActionView, IndexView, ShowView } from "../../../ui/View";
import { Resource, RouterAction } from "../utils";
import { Loader, RouterChildren } from "../Router";

export default function astronauts(): RouterChildren[] {
  return [
    {
      path: Resource.ASTRONAUTS,
      element: <IndexView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.ASTRONAUTS,
        action: RouterAction.INDEX,
        params,
      }),
    },
    {
      path: `${Resource.ASTRONAUTS}/:astronautId`,
      element: <ShowView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.ASTRONAUTS,
        action: RouterAction.SHOW,
        params,
      }),
    },
    {
      path: `${Resource.ASTRONAUTS}/create`,
      element: <ActionView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.ASTRONAUTS,
        action: RouterAction.NEW,
        params,
      }),
    },
    {
      path: `${Resource.ASTRONAUTS}/:astronautId/edit`,
      element: <ActionView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.ASTRONAUTS,
        action: RouterAction.EDIT,
        params,
      }),
    },
  ];
}
