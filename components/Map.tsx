import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { UserID } from "./FormControl";

const Map = ({ geo }: UserID) => {
  const center = React.useMemo(
    () => ({ lat: Number(geo?.lat), lng: Number(geo?.lng) }),
    [geo]
  );
  return (
    <GoogleMap zoom={5} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};
export default Map;
