import { LoaderFunctionArgs } from "react-router-dom";
import { IndexView } from "../../../ui/View";
import { Loader, RouterChildren } from "../Router";
import { Resource, RouterAction } from "../utils";

export default function gallery(): RouterChildren[] {
  return [
    {
      path: Resource.GALLERY,
      element: <IndexView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.GALLERY,
        action: RouterAction.INDEX,
        params,
      }),
    },
  ];
}
