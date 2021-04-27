import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome  from './components/welcome/Welcome';
import SignIn from './components/signIn/SignIn';
import AboutUs from './components/aboutUs/AboutUs';
import UsersLocation from './components/UsersLocation'
import Admin from './components/admin/Admin'
import FriendList from './components/friendlist/FriendList'
import MapComponent from './components/map/MapComponent';
import { getToken, onMessageListener } from './services/firebase';
import { saveUserToken } from './services/updateUserData';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {

  useEffect(() => {
    // Obtener token de app móvil
    if(window.Android) 
      prepareToAndroidNotifications()
    else 
      getToken( token => {
        saveUserToken(token);
      });
  }, []);

  onMessageListener().then(payload => {
    store.addNotification({
      title: payload.notification.title,
      message: payload.notification.body,
      type: "custom",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000
      }
    });
  }).catch(err => console.log('failed: ', err));
  
  return (
    <Router>
      <ReactNotification types={[
          {
            htmlClasses: ['notification__item--custom'],
            name: 'custom'
          }
        ]}/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/map' component={MapComponent} />
        
          <Route path='/sign-in'  component={SignIn} />
          <Route path='/about-us'  component={AboutUs} />
        <Route path='/locations' component={UsersLocation} />
        <Route path='/admin' component={Admin} />
        <Route path='/friend-list' component={FriendList} />
      </Switch>
      <Footer/>
    </Router>
  );          
}

function prepareToAndroidNotifications() {
  window.saveToken = new Event('saveToken');

  window.addEventListener('saveToken', function() {
    const token = window.Android.getToken()
    console.log("Token obtenido en evento: " + token)
    if(token)
      saveUserToken(token);
  }, false);

  window.Android.getFirebaseToken()
}