import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactElement, useCallback, useState } from "react";
import { Thumbnail as ThumbnailAPI } from "../../../api";
import { ThumbnailsDocument } from "../../../api/gql/graphql";
import { useBreakPoints, useData } from "../../App/hooks";
import { Spinner } from "../../ui/Spinner";
import Map from "./Map";
import Provider from "./Provider";
import Thumbnail from "./Thumbnail";

export type PositionProps = { lat: number; lng: number; isInView: boolean };

export type Position = {
  [id: string]: PositionProps;
};

export default function Gallery(): ReactElement {
  const [positions, setPositions] = useState<Position>({});
  const { downSM } = useBreakPoints();

  const { data, fetching } = useData<ThumbnailAPI[]>({ doc: ThumbnailsDocument });

  const Thumbnails = useCallback(() => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridGap: 5,
        }}
      >
        {data?.thumbnails
          ? data.thumbnails.map((props: ThumbnailAPI, index: number) => {
              return (
                <Thumbnail
                  key={index}
                  id={props.id}
                  src={props.thumbnailURL}
                  lat={props.info?.latitude}
                  lng={props.info?.longitude}
                  setPositions={setPositions}
                />
              );
            })
          : null}
      </div>
    );
  }, [data]);

  return (
    <Provider>
      <Box>
        <div style={{ display: "flex", flexDirection: downSM ? "column" : "row" }}>
          <div
            style={{
              padding: 5,
              border: `2px solid ${grey[300]}`,

              borderRadius: 5,
              width: downSM ? "100%" : "60%",
              marginRight: 20,
              maxHeight: downSM ? "60vh" : "85vh",
              overflowY: "scroll",
              marginBottom: 15,
            }}
          >
            {fetching ? <Spinner /> : <Thumbnails />}
          </div>
          <div style={{ width: downSM ? "100%" : "40%", height: downSM ? 200 : "" }}>
            <Map {...{ positions }} />
          </div>
        </div>
      </Box>
    </Provider>
  );
}
