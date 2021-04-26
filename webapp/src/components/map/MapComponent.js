import React, { useState } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
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
  if (session) {
    // Guardar localización en base de datos
    await updateLocation(session.webId, { lat: crd.latitude, lng: crd.longitude });
  }
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
  disableDefaultUI: true,
  zoomControl: true,
  minZoom: 10,
  maxZoom: 20,
}

// Notificar que ha abierto la app
notifyOpenMap();

var preferredZoom = 15;
try {
  navigator.geolocation.getCurrentPosition(success, error, optionsGeo);
} catch (err) { console.log() }

export default function MapComponent() {

  const [pPosition, setCurrentPosition] = useState(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(prevC => prevC =
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }, () => null);
  }
  );

  let radio = 100;

  function restarCurrentPosition() {
    setCurrentPosition(prevC => prevC = {
      lat: latitude,
      lng: longitude
    });
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: credentials.mapsKey
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => { restarCurrentPosition(); mapRef.current = map; }, []);

  if (loadError) return "Error loadinf maps"
  if (!isLoaded) { return "Loading Maps"; }

  return (

    <div>
      <div className="container">
        <span className="text-light p-1 w-25">Distancia deseada: </span>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={preferredZoom}
        center={pPosition}
        options={options}
        onLoad={onMapLoad}>
        <Markers rad={radio} />
      </GoogleMap>
    </div>
  )
}