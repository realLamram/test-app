import { ReactElement } from "react";
import useRouterResource from "../../App/Router/useRouterResource";

export default function Home(): ReactElement {
  useRouterResource();
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h3>Description</h3>
      </div>
    </div>
  );
}
