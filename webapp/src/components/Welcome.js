import React from 'react';
import { useSolidString } from '../hooks/useSolidString';
import { getPodString } from '../services/getPodString';
import { getUserWebId } from '../services/getUserWebId';
import { setPodString } from '../services/setPodString';

function Welcome(props) {

  const webId = useSolidString(getPodString);

  setPodString();

  return (
    <>
      <h1>Hi, {props.name}!</h1>
      <p> Prueba {webId}</p>
    </>
  );
}

export default Welcome;