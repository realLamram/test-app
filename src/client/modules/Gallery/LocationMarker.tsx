import L from "leaflet";
import { ReactElement } from "react";
import { Marker, Popup } from "react-leaflet";
import useGalleryContext from "./useGalleryContext";

export default function LocationMarker(props: {
  id: string;
  position: { lat: number; lng: number };
}): ReactElement | null {
  const { id, position } = props;
  const { selectedId, setSelectedId } = useGalleryContext();

  const icon = L.icon({
    iconUrl:
      selectedId === id
        ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
        : "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return position === null ? null : (
    <Marker
      icon={icon}
      position={position}
      eventHandlers={{
        click: (e) => {
          setSelectedId(id);
        },
      }}
    >
      <Popup>
        {`Latitude: ${position.lat}`} <br /> {`Longitude: ${position.lng}`}
      </Popup>
    </Marker>
  );
}
