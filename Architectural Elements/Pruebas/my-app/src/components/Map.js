import React from 'react';
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps';

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
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

const geo = navigator.geolocation.getCurrentPosition(success, error, options);

const Map = (props)=>{
  return(
    <GoogleMap defaultZoom = {20}
    defaultCenter={{ lat: latitude ,lng: longitude}}>
      <Marker
      lat={latitude}
      lng={longitude}
      name={'Kenyatta International Convention Centre'}
      color = "blue"
    />
    </GoogleMap>
    );
}
export default withScriptjs(
    withGoogleMap(
      Map
      )
)