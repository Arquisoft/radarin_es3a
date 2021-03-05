import React from 'react';
import {
  LoggedIn, LoggedOut,
  Value, List, 
} from '@solid/react';
import  Dashboard  from './components/Dashboard';
import  PopUpPod  from './components/PopUpPod';




export default function App() {
  return (
    <React.StrictMode>

    <LoggedOut>
      <div>
          {/* <LoginButton popup="./popup.html"/> */}
          <p>Please, log in your Pod.</p>
          <PopUpPod/>
      </div>
    </LoggedOut>

    <LoggedIn>
      <p>Welcome, <Value src="user.name"/>.</p>
      <h2>Friends</h2>
      {/*
      <ul>
        {elements.map((value, index) => {
          return <li key={index}>{value}</li>
          
        })}
      </ul>
      */}
      <List src="user.friends"/>
    </LoggedIn>

    </React.StrictMode>
  );
}