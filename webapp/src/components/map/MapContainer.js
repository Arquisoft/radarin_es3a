import MapComponent from './MapComponent'
import { useState } from "react";
import MapOff from './MapOff';
import { saveUserLocation } from '../../services/updateUserData';
import { Button } from '@material-ui/core';

export default function MapContainer() {

    const [on, setOn] = useState(true)

    function switchOnOff() {
        console.log("Encendiendo/apagando")
        if(on)
            saveUserLocation(undefined) // Limpiar localización
        setOn(!on)
    }

    return(
        <div>
            <Button onClick={() => switchOnOff() }>{ on ? 'Apagar' : 'Encender' }</Button>
            {on
            ? <MapComponent></MapComponent>
            : <MapOff></MapOff>}
            
        </div>
    );

}
