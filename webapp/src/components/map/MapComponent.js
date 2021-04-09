import React from 'react'
import { GoogleMap, useLoadScript} from '@react-google-maps/api';
import mapStyles from './mapStyles'
import { updateLocation } from '../../api/api';
import solidAuth from 'solid-auth-client';
import Markers from './Markers'
import credentials from './credentials'
import { notifyOpenMap } from '../../services/mailCtrl';

 



//-------------------------------------------------

var latitude;
var longitude;
let users = [];

var optionsGeo = {
    enableHighAccuracy: true,
    timeout: 5000,
  };
async function success(pos) {
    var crd = pos.coords;
    latitude = crd.latitude;
    longitude = crd.longitude;
  
    var session = await solidAuth.currentSession(); // Obtener sesión del usuario actual
    if(session) {
      // Guardar localización en base de datos
      await updateLocation(session.webId, { lat: crd.latitude, lng: crd.longitude });
    }
    center = {lat: latitude,
      lng: longitude}

    // Notificar que ha abierto la app
    notifyOpenMap();
}
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
//-------------------------------------------------

 function usersData(userList) {
    users = userList;
}

const mapContainerStyle = {
    width: "100vw",
    height: "80vh",
};
var center = {
    lat: 43.36029,
    lng: -5.84476
}
const options = {
    styles: mapStyles,
    disableDefaultUI : true,
    zoomControl: true,
    minZoom: 10,
    maxZoom: 20,
}
var preferredZoom = 15;
async function centerOn(pLatitude,pLongitude,pZoom){
  preferredZoom = pZoom;
  center.lat = pLatitude;
  center.lng = pLongitude; 
};

export default function MapComponent (){
    navigator.geolocation.getCurrentPosition(success, error, optionsGeo);

    const{isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: credentials.mapsKey
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {mapRef.current = map;}, []);

    if(loadError) return "Error loadinf maps"
    if(!isLoaded) return "Loading Maps"
    // users.forEach(element => {
    //   console.log(element.latitude)
    // });
    
    centerOn(43.36,-5.84,15)

    return <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={preferredZoom} 
        center = {center}
        options={options}
        onLoad={onMapLoad}
        >
        <Markers />
        </GoogleMap>
    </div>
}