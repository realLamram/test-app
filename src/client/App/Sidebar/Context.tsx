import { createContext } from "react";

export type DrawerVariant = "permanent" | "persistent" | "temporary" | undefined;

export type SidebarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  variant: DrawerVariant;
};

const SidebarContext = createContext<SidebarContextType>({
  open: true,
  setOpen: (open: boolean) => {},
  variant: "permanent",
});

export default SidebarContext;
