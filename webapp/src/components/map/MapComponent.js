import React, { useState } from 'react'
import { GoogleMap, useLoadScript} from '@react-google-maps/api';
import mapStyles from './mapStyles'
import Markers from './Markers'
import credentials from './credentials'
import { notifyOpenMap } from '../../services/notify';
import { updateLocation } from '../../api/api';
import solidAuth from 'solid-auth-client';

 
//-------------------------------------------------\
var latitude;
var longitude;

async function success(pos) {
  var crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;
  
  var session = await solidAuth.currentSession(); // Obtener sesión del usuario actual
  if(session) {
    // Guardar localización en base de datos
    await updateLocation(session.webId, { lat: crd.latitude, lng: crd.longitude });
  }

  // Notificar que ha abierto la app
  notifyOpenMap();
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

var optionsGeo = {
  enableHighAccuracy: true,
  timeout: 5000,
};
//-------------------------------------------------

const mapContainerStyle = {
  width: "100vw",
  height: "80vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI : true,
  zoomControl: true,
  minZoom: 10,
  maxZoom: 20,
}
var preferredZoom = 15;
try{
const geo =  navigator.geolocation.getCurrentPosition(success, error, optionsGeo);
}catch(err){console.log(err)}

export default function MapComponent (){

    const[pPosition,setCurrentPosition] = useState(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            setCurrentPosition(prevC =>prevC =
            {
              lat:position.coords.latitude,
              lng:position.coords.longitude})
          },() => null);
        }
      );

      function restarCurrentPosition(){
        setCurrentPosition(prevC => prevC = {
          lat: latitude,
          lng: longitude});
      }

    const{isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: credentials.mapsKey
    });
    
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {restarCurrentPosition();mapRef.current = map;}, []);
    
    if(loadError) return "Error loadinf maps"
    if(!isLoaded){return "Loading Maps";}    

    return <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={preferredZoom} 
        center = {pPosition}
        options={options}
        onLoad={onMapLoad}>
        <Markers/>
        </GoogleMap>
    </div>
}