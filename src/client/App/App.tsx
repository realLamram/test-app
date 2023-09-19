import { ReactElement } from "react";
import { useQuery } from "urql";
import { GetUsersDocument, GetUserDocument, User } from "../../api/gql/graphql";
// import { User } from "../../api";
import Router from "./Router";
import ThemeProvider from "../theme/ThemeProvider";
import SidebarProvider from "../Sidebar/Provider";

export default function App(): ReactElement {
  const [result] = useQuery<User>({
    query: GetUserDocument,
    variables: { id: "1350afc0-4be7-46ff-8db8-166d28b07re6" },
  });

  const { data, fetching, error } = result;

  const [r] = useQuery<[User]>({
    query: GetUsersDocument,
  });

  console.log("Result ", r);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router />
      </SidebarProvider>
    </ThemeProvider>
  );
}
