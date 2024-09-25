import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [51.505, -0.09]; // Replace with your desired latitude and longitude
<<<<<<< HEAD
=======
  const position2 = [52.505, -0.19]; // Replace with your desired latitude and longitude
>>>>>>> 545d729de561a2e453eea08e088445d86ed3db6f

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A popup for your marker.</Popup>
      </Marker>
<<<<<<< HEAD
=======

      <Marker position={position2}>
        <Popup>A popup for your marker.</Popup>
      </Marker>
>>>>>>> 545d729de561a2e453eea08e088445d86ed3db6f
    </MapContainer>
  );
};

export default MapComponent;
