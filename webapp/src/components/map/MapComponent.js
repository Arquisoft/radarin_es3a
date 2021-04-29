import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import mapStyles from './mapStyles'
import Markers, { changeRadius, updateUserMarker } from './Markers'
import credentials from './credentials'
import { notifyOpenMap } from '../../services/notify';
import { updateLocation } from '../../api/api';
import solidAuth from 'solid-auth-client';
import { requiredGender } from 'rdf-namespaces/dist/schema';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import SliderRadio from './SliderRadio';
import './MapComponent.css'

//-------------------------------------------------\
var latitude;
var longitude;

var watchId;
var actualPosition;


const mapContainerStyle = {
  width: "100%",
  height: "80vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  minZoom: 10,
  maxZoom: 20,
}


function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
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

        solidAuth.currentSession().then(session => {
          if (session)
            updateLocation(session.webId, actualPosition);
        })
      }, () => null);
  }
  );

  var timer;
  useEffect(() => {
    if (!watchId) {
      if (timer)
        clearInterval(timer);
      timer = setInterval(updateUserLocation, 1000)
    }

    return () => { clearInterval(timer); };
  })

  function restarCurrentPosition() {
    setCurrentPosition(prevC => prevC = {
      lat: latitude,
      lng: longitude
    });
  }

  function updateUserLocation() {
    navigator.geolocation.clearWatch(watchId)
    watchId = navigator.geolocation.watchPosition((newPos) => {
      if (!actualPosition || (actualPosition.lat !== newPos.coords.latitude
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

    <div className="mapa">
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
