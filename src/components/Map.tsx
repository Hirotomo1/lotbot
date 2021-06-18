import React, { FC } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../assets/styles/style.css";

const containerStyle = {
  width: "350px",
  height: "350px",
};
const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const Map: FC = () => {
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
