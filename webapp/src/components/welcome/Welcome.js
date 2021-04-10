import React from 'react';
import './Welcome.css';
import { fetchPhoto } from '../../services/fetchProfile'

// export const Welcome = () => {
export default function Welcome  ()  { 
  return (
    <div className="welcome">
      <h1>Bienvenidos a Radarin</h1>
      <p>En esta aplicacion podras localizar a tus amigos cercanos</p>
      <img src={fetchPhoto()} />
    </div>
  );
}