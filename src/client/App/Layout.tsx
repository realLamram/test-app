import { ReactElement } from "react";
import Sidebar from "./Sidebar/Sidebar";
import TopBar from "./Topbar";
import SidebarProvider from "./Sidebar/Provider";
import Outlet from "./Outlet";
// import Error from "./Error";

export default function Layout(): ReactElement {
  return (
    <>
      <SidebarProvider>
        <TopBar />
        <Sidebar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
