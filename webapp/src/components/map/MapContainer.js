import MapComponent from './MapComponent'
import { useState } from "react";
import MapOff from './MapOff';
import { saveUserLocation } from '../../services/updateUserData';
import { Button } from '@material-ui/core';
import SliderRadio from './SliderRadio';

export default function MapContainer() {

    const [on, setOn] = useState(true)

    function switchOnOff() {
        if (on)
            saveUserLocation(undefined) // Limpiar localización
        setOn(!on)
    }

    return (
        <div className="container-fluid">
            <div className="col md-12">
                <div className="row">
                    <Button className="" onClick={() => switchOnOff()}>{on ? 'Apagar' : 'Encender'}</Button>
                    <div>
                        <div className="container">
                            <span className="text-light p-1 w-25">Distancia deseada: </span>
                            <SliderRadio />
                            {/* <input type="text" value={radioBusqueda} onChange={handleChange}  ></input> */}
                            {/* <span className="text-light p-1 w-25">Value: {radioBusqueda} </span> */}
                        </div>
                    </div>
                    <div className="row">
                        {on
                            ? <MapComponent></MapComponent>
                            : <MapOff></MapOff>}
                    </div>
                </div>
            </div>
        </div>
    );

}
