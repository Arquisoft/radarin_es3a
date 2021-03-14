import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import credentials from './credentials';


var latitude;
var longitude;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function success(pos) {
  var crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

const geo = navigator.geolocation.getCurrentPosition(success, error, options);

const containerStyle = {
  width: '100%',
  height: '90vh'
};

function MapContainer() {

  const locations = [
    {
      name: "Mi localizacion",
      location: { 
        lat: latitude,
        lng: longitude 
      },
    }
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: credentials.mapsKey
  })
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={14}
        center={{ lat: latitude, lng:longitude}}
      >
        {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
        }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)