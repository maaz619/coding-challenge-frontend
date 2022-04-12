import { useLoadScript } from "@react-google-maps/api";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import FormControl, { UserID } from "../components/FormControl";
import Map from "../components/Map";
type Location = {
  lat: number;
  lng: number;
};

const Home: NextPage = () => {
  const [geo, setGeo] = React.useState<Location>({ lat: 0, lng: 0 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDppQJ0aqlRCjK_eEnKxdbmJ-AAVbUqdQE",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <FormControl callback={setGeo} />
      <Map geo={geo} />
    </>
  );
};

export default Home;
