import { grey, red } from "@mui/material/colors";
import { useEffect, useRef } from "react";
import { Position } from "./Gallery";
import useGalleryContext from "./useGalleryContext";
import { Maybe } from "../../../api";

type ThumbnailProps = {
  id: string;
  src: string;
  alt?: string;
  lat?: Maybe<number>;
  lng?: Maybe<number>;
  setPositions: (position: any) => void;
};

const Thumbnail = ({ id, src, alt, lat, lng, setPositions }: ThumbnailProps) => {
  const imageRef = useRef(null);

  const { selectedId, setSelectedId } = useGalleryContext();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPositions((prev: Position) => ({
            ...prev,
            [id]: { lat, lng, isInView: true },
          }));
        } else {
          setPositions((prev: Position) => ({
            ...prev,
            [id]: { lat, lng, isInView: false },
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef, src, alt]);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setSelectedId(id);
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => setSelectedId(id)}
      style={{
        maxWidth: 240,
        padding: 5,
        borderRadius: 5,
        backgroundColor: selectedId === id ? red[200] : grey[50],
        margin: 5,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt ?? `Latitude: ${lat}, Longitude: ${lng}`}
        width="100%"
        height="auto"
        style={{
          borderRadius: 5,
        }}
      />
    </div>
  );
};

export default Thumbnail;
