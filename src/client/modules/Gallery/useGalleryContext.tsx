import { useContext } from "react";
import GalleryContext from "./Context";

export default function useGalleryContext() {
  const context = useContext(GalleryContext);
  return context;
}
