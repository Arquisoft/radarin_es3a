import React from 'react';
import './App.css';
import LogoR from './LogoR.svg';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

import {LoggedIn, LoggedOut,Value, Image, List} from '@solid/react';
import MapContainer from './components/MapContainer';
import PopUpPod from './components/PopUpPod';
import UsersLocation from './components/UsersLocation';

export default function App() {
    return(
      <div>
      <header className="App-header">
          <img src={LogoR} className="App-logo" alt="LogoR"/>
          <Welcome name="ASW students"/>
        </header>
      <main>
        <LoggedIn>
          <p>Welcome back, <Value src="user.name"/>.</p>
          <Image src="user.image" defaultSrc="logo192.png" className="pic"/>
          <p> <Value src="user.email"/>.</p>
          <h2>Friends</h2>
          <List src="user.friends"/>
          <UsersLocation/>
          <MapContainer/>
        </LoggedIn>
        <LoggedOut>
            <PopUpPod/>
            <p>You are logged out.</p>
        </LoggedOut>
      </main>
      <footer>
      <a className="App-link"
            href="https://github.com/pglez82/radarin_0"
            target="_blank"
            rel="noopener noreferrer">Source code</a>
      </footer>
    </div>
    );
}