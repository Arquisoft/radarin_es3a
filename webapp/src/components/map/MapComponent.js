import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import mapStyles from './mapStyles'
import Markers, { changeRadius, updateUserMarker } from './Markers'
import credentials from './credentials'
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

  const [radioBusqueda, setFname] = useState(10)

  const handleChange = e => {
    //window.location.reload(false);
    setFname(e.target.value)
    changeRadius(e.target.value)
  }


  

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

  useEffect(() => {
    let timer
    timer = setInterval(updateUserLocation, 1000)
    
    console.log(timer)
    
     return () => { clearInterval(timer); };
  })

  function restarCurrentPosition() {
    setCurrentPosition(prevC => prevC = {
      lat: latitude,
      lng: longitude
    });
  }

  function updateUserLocation() {
    console.log("updating")
    navigator.geolocation.clearWatch( watchId ) 
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
        <input type="text" value={radioBusqueda} onChange={handleChange}  ></input>
        <span className="text-light p-1 w-25">Value: {radioBusqueda} </span>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={preferredZoom}
        center={pPosition}
        options={options}
        onLoad={onMapLoad}>
        <Markers rad={radioBusqueda} />
      </GoogleMap>
    </div>
  )
}