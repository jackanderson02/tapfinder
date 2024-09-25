import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ pubs }) => {
  const position = [51.505, -0.09]; // Replace with your desired latitude and longitude

  const displayMarkerPub = (m) => {
    console.log(m)
  }

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

      {pubs.map((pub) => {
        <Marker position={[pub.lat, pub.lng]}>
          <Popup>A popup for your marker.</Popup>
        </Marker>
      })}

      
    </MapContainer>
  );
};

export default MapComponent;
