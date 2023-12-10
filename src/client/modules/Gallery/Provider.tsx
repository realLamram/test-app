import { PropsWithChildren, ReactElement, useState } from "react";
import GalleryContext from "./Context";

export default function Provider(props: PropsWithChildren): ReactElement {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <GalleryContext.Provider value={{ selectedId, setSelectedId }}>
      {props.children}
    </GalleryContext.Provider>
  );
}
