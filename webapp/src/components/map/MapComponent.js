import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import mapStyles from './mapStyles'
import Markers, { updateUserMarker } from './Markers'
import credentials from './credentials'
import { notifyOpenMap } from '../../services/notify';
import { updateLocation } from '../../api/api';
import solidAuth from 'solid-auth-client';

//-------------------------------------------------\
var latitude;
var longitude;

var watchId;
var actualPosition;

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
//notifyOpenMap();

var preferredZoom = 15;

export default function MapComponent() {

  const [pPosition, setCurrentPosition] = useState(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(prevC => prevC =
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }) 

        actualPosition = { lat: position.coords.latitude, lng: position.coords.longitude }

        solidAuth.currentSession().then( session => {
          if (session) 
            updateLocation(session.webId, actualPosition);
          }) 
      }, () => null);
  }
  );

  var timer;
  useEffect(() => {
    if(!watchId) 
      timer = setInterval(updateUserLocation, 1000)
    
      stopUpdating = () => clearInterval(timer);
  })

  let radio = 100;

  function restarCurrentPosition() {
    setCurrentPosition(prevC => prevC = {
      lat: latitude,
      lng: longitude
    });
  }

  function updateUserLocation() {
    navigator.geolocation.clearWatch( watchId ) 
    console.log("Updating")
    watchId = navigator.geolocation.watchPosition((newPos) => {
        if(!actualPosition || (actualPosition.lat !== newPos.coords.latitude 
            || actualPosition.lng !== newPos.coords.longitude)) {

          actualPosition = { lat: newPos.coords.latitude, lng: newPos.coords.longitude }

          solidAuth.currentSession().then(session => {
            if (session) {
              updateUserMarker(actualPosition)
              updateLocation(session.webId, actualPosition)
              setCurrentPosition(prevC => prevC =
                  {
                    lat: newPos.coords.latitude,
                    lng: newPos.coords.longitude
                  })
            }
          })
        }
    })
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

export function stopUpdating() {};