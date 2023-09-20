import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import useBreakPoints from "./../hooks/useBreakPoints";
import SidebarContext, { DrawerVariant } from "./Context";

export type SidebarProviderProps = PropsWithChildren<any>;

export default function SidebarProvider({ children }: SidebarProviderProps): ReactElement {
  const { downMD } = useBreakPoints();
  const [open, setOpen] = useState<boolean>(true);
  const [variant, setVariant] = useState<DrawerVariant>("permanent");

  useEffect(() => {
    if (downMD) {
      setOpen(false);
      setVariant("temporary");
    } else {
      setOpen(true);
      setVariant("permanent");
    }
  }, [downMD]);

  return (
    <SidebarContext.Provider value={{ open, setOpen, variant }}>{children}</SidebarContext.Provider>
  );
}
