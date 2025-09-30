import GoogleMapReact from 'google-map-react';

 
const Marker = ({ className }) => (
  <i
    className={`fa-solid fa-map-pin text-red-400 ${className}`}
    style={{ fontSize: '24px' }}
  ></i>
);

function MyMap() {
  console.log('Google Maps API Key:', import.meta.env.VITE_API_KEY);

  const defaultProps = {
    center: { lat: 45.5048, lng: -73.5772 },
    zoom: 11,
  };

  return (
 
    <div style={{ margin: '20px' }}>
 
      <div
        style={{
          height: '500px',
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker lat={45.5048} lng={-73.5772} className="text-4xl" />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default MyMap;
