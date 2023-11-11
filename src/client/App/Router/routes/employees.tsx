import { LoaderFunctionArgs } from "react-router-dom";
import { ActionView, IndexView, ShowView } from "../../../ui/View";
import { Resource, RouterAction } from "../utils";
import { Loader, RouterChildren } from "../Router";

export default function employees(): RouterChildren[] {
  return [
    {
      path: Resource.EMPLOYEES,
      element: <IndexView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.EMPLOYEES,
        action: RouterAction.INDEX,
        params,
      }),
    },
    {
      path: `${Resource.EMPLOYEES}/:employeeId`,
      element: <ShowView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.EMPLOYEES,
        action: RouterAction.SHOW,
        params,
      }),
    },
    {
      path: `${Resource.EMPLOYEES}/create`,
      element: <ActionView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.EMPLOYEES,
        action: RouterAction.NEW,
        params,
      }),
    },
    {
      path: `${Resource.EMPLOYEES}/:employeeId/edit`,
      element: <ActionView />,
      loader: async ({ params }: LoaderFunctionArgs): Promise<Loader> => ({
        resource: Resource.EMPLOYEES,
        action: RouterAction.EDIT,
        params,
      }),
    },
  ];
}
