import React from 'react';
import Navbar from './components/navBar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome  from './components/welcome/Welcome';
import PopUpPod from './components/PopUpPod';
import SignIn from './components/signIn/SignIn';
import UsersLocation from './components/UsersLocation'
import FriendList from './components/FriendList'
import MapComponent from './components/map/MapComponent';
import Footer from './components/footer/Footer';


export default function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/map' component={MapComponent} />
        <Route path='/login' component={PopUpPod} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/locations' component={UsersLocation} />
        <Route path='/friend-list' component={FriendList} />
      </Switch>
      <Footer/>
    </Router>
  );
}
