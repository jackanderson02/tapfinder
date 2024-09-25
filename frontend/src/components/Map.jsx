import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ prop }) => {
  const position = [51.505, -0.09]; // Replace with your desired latitude and longitude
  console.log(prop);

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

      {prop.map((pub, i) => {
        return (
          <Marker position={[pub[i].lat, pub[i].lng]}>
            <Popup>A popup for your marker.</Popup>
          </Marker>
        );
      })}

      <Marker position={position}>
        <Popup>A popup for your marker.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
