import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Position, PositionProps } from "./Gallery";
import GalleryContext from "./Context";
import { useContext } from "react";

const Map = (props: { positions: Position }) => {
  const { positions } = props;
  const { selectedId } = useContext(GalleryContext);
  let pos = Object.entries(positions).find(
    ([key, pos]: [key: string, pos: PositionProps]) =>
      (selectedId && selectedId === key && pos.isInView) || (!selectedId && pos.isInView)
  );
  pos = pos
    ? pos
    : Object.entries(positions).find(
        ([key, pos]: [key: string, pos: PositionProps]) => pos.isInView
      );

  return (
    <MapContainer
      key={pos?.[1].lat}
      style={{ height: "100%", width: "100%", borderRadius: 10 }}
      center={[pos?.[1].lat ?? 0, pos?.[1].lng ?? 0]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.entries(positions).map(([id, { lat, lng, isInView }]) =>
        isInView ? <LocationMarker key={id} id={id} position={{ lat, lng }} /> : null
      )}
    </MapContainer>
  );
};

export default Map;
