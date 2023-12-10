import { createContext } from "react";

export type GalleryContextType = {
  selectedId?: string;
  setSelectedId: (id: string) => void;
};

const GalleryContext = createContext<GalleryContextType>({} as GalleryContextType);

export default GalleryContext;
