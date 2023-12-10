import { LoaderFunctionArgs } from "react-router-dom";
import { IndexView, ShowView } from "../../../ui/View";
import { Loader, RouterChildren } from "../Router";
import { Resource, RouterAction } from "../utils";

export default function swapi(): RouterChildren[] {
  return [
    {
      path: Resource.SWAPI,
      element: <IndexView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.SWAPI,
        action: RouterAction.INDEX,
        params,
      }),
    },
    {
      path: `${Resource.SWAPI}/:characterId`,
      element: <ShowView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.SWAPI,
        action: RouterAction.SHOW,
        params,
      }),
    },
  ];
}
