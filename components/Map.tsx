import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { UserID } from "./FormControl";

const Map: React.FC<UserID> = ({ geo }) => {
  const center = React.useMemo(
    () => ({ lat: Number(geo?.lat), lng: Number(geo?.lng) }),
    [geo]
  );
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GoogleMap
          zoom={3}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </>
  );
};
export default Map;
