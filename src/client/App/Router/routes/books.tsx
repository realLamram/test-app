import { LoaderFunctionArgs } from "react-router-dom";
import { ActionView, CustomerView, IndexView, ShowView } from "../../../ui/View";
import { Resource, RouterAction } from "../utils";
import { Loader, RouterChildren } from "../Router";

export default function books(): RouterChildren[] {
  return [
    {
      path: Resource.BOOKS,
      element: <IndexView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.BOOKS,
        action: RouterAction.INDEX,
        params,
      }),
    },
    {
      path: `${Resource.BOOKS}/customerview`,
      element: <CustomerView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.BOOKS,
        action: RouterAction.CUSTOMER_VIEW,
        params,
      }),
    },
    {
      path: `${Resource.BOOKS}/:bookId`,
      element: <ShowView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.BOOKS,
        action: RouterAction.SHOW,
        params,
      }),
    },
    {
      path: `${Resource.BOOKS}/create`,
      element: <ActionView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.BOOKS,
        action: RouterAction.NEW,
        params,
      }),
    },
    {
      path: `${Resource.BOOKS}/:bookId/edit`,
      element: <ActionView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.BOOKS,
        action: RouterAction.EDIT,
        params,
      }),
    },
  ];
}
