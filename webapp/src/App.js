import React, { useEffect } from 'react';
import Navbar from './components/navBar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome  from './components/welcome/Welcome';
import PopUpPod from './components/PopUpPod';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UsersLocation from './components/UsersLocation'
import FriendList from './components/FriendList'
import MapComponent from './components/map/MapComponent';
import Footer from './components/footer/Footer' 
import { getToken, onMessageListener } from './services/firebase';
import { saveUserToken } from './services/updateUserData';


export default function App() {

  useEffect(() => {
    getToken( token => {
      saveUserToken(token);
     });
  }, []);

  onMessageListener().then(payload => {
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/map' component={MapComponent} />
        <Route path='/login' component={PopUpPod} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/locations' component={UsersLocation} />
        <Route path='/friend-list' component={FriendList} />
      </Switch>
      <Footer/>
    </Router>
  );
}
