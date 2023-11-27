import { LoaderFunctionArgs } from "react-router-dom";
import { IndexView, ShowView } from "../../../ui/View";
import { Loader, RouterChildren } from "../Router";
import { Resource, RouterAction } from "../utils";

export default function films(): RouterChildren[] {
  return [
    {
      path: Resource.FILMS,
      element: <IndexView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.FILMS,
        action: RouterAction.INDEX,
        params,
      }),
    },
    {
      path: `${Resource.FILMS}/:filmId`,
      element: <ShowView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.FILMS,
        action: RouterAction.SHOW,
        params,
      }),
    },
  ];
}
