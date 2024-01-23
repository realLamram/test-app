import { UserRole } from "@prisma/client";
import { LoaderFunctionArgs } from "react-router-dom";
import { ActionView, IndexView } from "../../../ui/View";
import useUser from "../../User/useUser";
import { Loader, RouterChildren } from "../Router";
import { Resource, RouterAction } from "../utils";

export default function login(): RouterChildren[] {
  const { can } = useUser();
  if (can([UserRole.ADMIN, UserRole.USER])) {
    return [
      {
        path: Resource.LOGIN,
        element: <IndexView />,
        loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
          resource: Resource.LOGIN,
          action: RouterAction.INDEX,
          params,
        }),
      },
      {
        path: `${Resource.LOGIN}/create`,
        element: <ActionView />,
        loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
          resource: Resource.LOGIN,
          action: RouterAction.NEW,
          params,
        }),
      },
      {
        path: `${Resource.LOGIN}/${RouterAction.EDIT}/:id`,
        element: <ActionView />,
        loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
          resource: Resource.LOGIN,
          action: RouterAction.EDIT,
          params,
        }),
      },
    ];
  } else {
    return [];
  }
}
