import React, { FC, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../assets/styles/style.css";
import { useSelector } from "react-redux";
import { AppState } from "../reducks/store/store";

const Map: FC = () => {
  const lat = useSelector((state: AppState) => state.lats.lat);
  const lng = useSelector((state: AppState) => state.lngs.lng);

  const containerStyle = {
    width: "700px",
    height: "490px",
  };
  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
