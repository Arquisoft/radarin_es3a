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

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          {lat: latitude,
          lng: longitude}
        }
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
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