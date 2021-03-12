import React from 'react';
import {
  AuthButton,LoginButton, LoggedIn, LoggedOut,
  Value, Image, List, Link, Label,
  Like,
} from '@solid/react';
import  Dashboard  from './components/Dashboard';
import  Map  from './components/Map';
import credentials from './credentials';


const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

export default function App() {
  return (
    <div>
      <header>
        <h1>Prueba 1 / React-Solid
        </h1>
      </header>
      <main>
        <LoggedIn>
          <p>Welcome back, <Value src="user.name"/>.</p>
          <Image src="user.image" defaultSrc="logo192.png" className="pic"/>
          <p> <Value src="user.email"/>.</p>
          <h2>Friends</h2>
          <List src="user.friends.firstName"/>
          <Dashboard/>
          <Map 
          googleMapURL= {mapURL}
          containerElement= {<div style={{height: '50vh'}}/>}
          mapElement= {<div style={{height:'100vh'}}/>}
          loadingElement={<p>Cargando</p>}/>
        </LoggedIn>
        <LoggedOut>
            <p>You are logged out.</p>
        </LoggedOut>
      </main>
      <footer>
      </footer>
    </div>
  );
}