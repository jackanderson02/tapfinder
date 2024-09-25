import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import PubCard from "./PubCard";

const MapComponent = ({ pubs }) => {
  const position = [51.505, -0.09]; // Replace with your desired latitude and longitude

  const [selectedPub, setSelectedPub] = useState(null)


  const pubMarkerClicked = (pub) => {
    // console.log(pub)
    setSelectedPub(pub)
  }

  return (

    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {pubs.map((pub, i) => {
          return (
            <Marker position={[pub.lat, pub.lng]} eventHandlers={{click: () => pubMarkerClicked(pub)}}>
              <Popup>{pub.name}</Popup>
            </Marker>
          );
        })}

        
      </MapContainer>

      {selectedPub && (
        <PubCard pub={selectedPub}></PubCard>
      )}

    </div>
  );
};

export default MapComponent;
