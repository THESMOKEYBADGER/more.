import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Replace with your own API key
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Define the map container style and initial position
const mapContainerStyle = {
  height: "400px",
  width: "100%"
};

const center = {
  lat: 37.7749, // Default center latitude (e.g., San Francisco)
  lng: -122.4194 // Default center longitude
};

const places = [
  { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
  // Add more places here
];

function Map() {
  // Ensure API key is available and not empty
  if (!API_KEY) {
    return <p>Error: Google Maps API key is missing</p>;
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {places.map((place, index) => (
          <Marker
            key={index}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
