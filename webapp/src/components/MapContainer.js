import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import credentials from './credentials';
import { getUsers, updateLocation } from '../api/api';
import solidAuth from 'solid-auth-client';
import Markers from './Markers';


var latitude;
var longitude;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
async function success(pos) {
  var crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;

  var session = await solidAuth.currentSession(); // Obtener sesión del usuario actual
    if(session) {
      // Guardar localización en base de datos
      updateLocation(session.webId, { lat: crd.latitude, lng: crd.longitude });
    }
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
            <Markers/>
        }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)