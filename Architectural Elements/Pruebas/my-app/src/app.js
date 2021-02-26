import React from 'react';
import {
  AuthButton,LoginButton, LoggedIn, LoggedOut,
  Value, Image, List, Link, Label,
  Like,
} from '@solid/react';
import  Dashboard  from './components/Dashboard';
import  PopUpPod  from './components/PopUpPod';




export default function App() {
  return (
    <div>
      <header>
        <h1>Esto es una prueba que me levanta dolor de cabeza
        </h1>
      </header>
      <main>
        <LoggedIn>
          <p>Welcome back, <Value src="user.name"/>.</p>
          <h2>Friends</h2>
          <List src="user.friends.firstName"/>
          
        </LoggedIn>
        <LoggedOut>
            <PopUpPod/>
            <LoginButton popup="./popup.html"/>
            <p>You are logged out.</p>
        </LoggedOut>
      </main>
      <footer>
      </footer>
    </div>
  );
}