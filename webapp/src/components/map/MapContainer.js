import MapComponent from './MapComponent'
import { useState } from "react";
import MapOff from './MapOff';
import { saveUserLocation } from '../../services/updateUserData';
import { Button } from '@material-ui/core';
import SliderContainer from './SliderContainer';
import MutedComponent from './MutedComponent';


export default function MapContainer() {

    const [on, setOn] = useState(false)

    function switchOnOff() {
        if (on)
            saveUserLocation(undefined) // Limpiar localización
        setOn(!on)
    }

    return (
        <div className="container-fluid  p-0 m-0">
            <div className="row">
                <div className="col md-12">

                    <div className="container-fluid p-0 m-0">
                        <div className="row">
                            <div className="col md-6 ">
                                <Button className="" onClick={() => switchOnOff()}>{on ? 'Apagar' : 'Encender'}</Button>
                            </div>
                            <div className="col md-6">
                                <div className="container-fluid p-0 m-0">
                                    {on
                                        ? <SliderContainer />
                                        : <MutedComponent />}
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col md-6">
                                <div className="container-fluid p-0 m-0">
                                    {on
                                        ? <MapComponent></MapComponent>
                                        : <MapOff></MapOff>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
