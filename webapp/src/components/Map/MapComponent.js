import React from 'react'
import { GoogleMap, useLoadScript} from '@react-google-maps/api';
import mapStyles from './mapStyles'
import { updateLocation } from '../../api/api';
import solidAuth from 'solid-auth-client';
import Markers from './Markers'





//-------------------------------------------------

var latitude;
var longitude;

var optionsGeo = {
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
      await updateLocation(session.webId, { lat: crd.latitude, lng: crd.longitude });
    }
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  const geo = navigator.geolocation.getCurrentPosition(success, error, optionsGeo);
//-------------------------------------------------



const mapContainerStyle = {
    width: "99vw",
    height: "90vh",
};
const center = {
    lat: 43.36029,
    lng: -5.84476
}
const options = {
    styles: mapStyles,
    disableDefaultUI : true,
    zoomControl: true,
}

export default function MapComponent (){

    const{isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyBeOXOZqlVVZgu-NdCIMGysieC4RWDjX6A"
    });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    // const onMapClick = React.useCallback((event) =>{
    //     setMarkers(current => [...current, {
    //         lat: event.latLng.lat(),
    //         lng: event.latLng.lng(),
    //         time: new Date(),
    //     },
    // ]);
    // });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {mapRef.current = map;}, []);

    if(loadError) return "Error loadinf maps"
    if(!isLoaded) return "Loading Maps"


    return <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={8} 
        center = {center}
        options={options}
        //onClick={onMapClick}
        onLoad={onMapLoad}
        >
        <Markers userLocation={ {lat: latitude, lng: longitude}}
        />
        </GoogleMap>
    </div>
}