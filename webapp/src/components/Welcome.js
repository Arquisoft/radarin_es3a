import React from 'react';
import { getPodString } from '../services/getPodString';
import { getUserWebId } from '../services/getUserWebId';

function Welcome(props) {

  var valor;

  const webId2 = Promise.resolve(getUserWebId());
  webId2.then(() => {valor = 'prueba1'});

  

  const webId = getUserWebId()
    .then((response) => {return response.toString()});

    
  const showWebId = async () => {
    const a = await webId;
    console.log(a.toString());
    valor = a.toString();
  };
  
  showWebId();

  return (
    <>
      <h1>Hi, {props.name}!</h1>
      <p> Prueba {valor}</p>
    </>
  );
}

export default Welcome;