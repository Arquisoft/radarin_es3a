import React from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import credentials from './credentials';

//Opciones Geolocalizacion
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  var latitude;
  var longitude;
  function success(pos) {
    var crd = pos.coords;
    latitude = crd.latitude;
    longitude = crd.longitude;
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  const geo = navigator.geolocation.getCurrentPosition(success, error, options);


  //Mapa 
  export const MapContainer = () => {
    
    const locations = [
        {
          name: "Mi localizacion",
          location: { 
            lat: latitude,
            lng: longitude 
          },
        },
        {
          name: "Mi localizacion",
          location: { 
            lat: 0,
            lng: 0 
          },
        }
      ];
  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: latitude, lng: longitude
  }

  return (
     <LoadScript
       googleMapsApiKey= {credentials.mapsKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
        }
     </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;