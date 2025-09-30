// MyMap.js
import GoogleMapReact from "google-map-react";

// Marker 组件
const Marker = ({ className }) => (
  <i
    className={`fa-solid fa-map-pin text-red-400 ${className}`}
    style={{ fontSize: "24px" }}
  ></i>
);

function MyMap() {
  console.log("Google Maps API Key:", import.meta.env.VITE_API_KEY);

  const defaultProps = {
    center: { lat: 45.5048, lng: -73.5772 },
    zoom: 11,
  };

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={45.5048} lng={-73.5772} />
      </GoogleMapReact>
    </div>
  );
}

export default MyMap;
