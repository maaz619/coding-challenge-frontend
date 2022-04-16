import { useLoadScript } from "@react-google-maps/api";
import type { NextPage } from "next";
import React from "react";
import FormControl from "../components/FormControl";
import Map from "../components/Map";
import { Location } from "../components/FormControl";
import FormPost from "../components/FormPost";

const Home: NextPage = () => {
  const [geo, setGeo] = React.useState<Location>({ lat: 0, lng: 0 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GMAP_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <FormControl callback={setGeo} />
      <Map geo={geo} id={1} />
    </>
  );
};

export default Home;
