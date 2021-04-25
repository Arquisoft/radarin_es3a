import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { LoggedOut, LoggedIn, LogoutButton } from '@solid/react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  // Saltaba error, comentado - Raúl
  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark ">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <img src='/navbarIcon.svg' to='/' className='logo' class="navbar-brand d-print-inline w-25 p-3" alt="Radarin" />
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>RADARIN</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}  class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
               <Link to='/map' className='nav-links' onClick={closeMobileMenu}  class="nav-link">Map</Link>
            </li>
            <li class="nav-item">
              <Link to='/admin' className='nav-links' onClick={closeMobileMenu}  class="nav-link">Admin</Link>
            </li>
            <li class="nav-item">
              <a href="#">
                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}  class="nav-link">About us</Link>
              </a>
            </li>
            <LoggedIn>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <Link to='/friend-list' className='nav-links' onClick={closeMobileMenu}>
                    Friends <i className='fas fa-caret-down' />
                  </Link>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to='/friend-list' className='nav-links' onClick={closeMobileMenu} class="dropdown-item" >FriendList</Link>
                  <Link to='/locations' className='nav-links' onClick={closeMobileMenu} class="dropdown-item" >Locations of Friends</Link>
                </div>
              </li>
              <li class='nav-item'>
                <LogoutButton type="button" className='btnL' class='btn btn-danger' onClick={closeMobileMenu}>Log out</LogoutButton>
              </li>
            </LoggedIn>
            <LoggedOut>
              <li class='nav-item'>
                <Link to='/sign-in' type="button" className='nav-links' onClick={closeMobileMenu}>Sign In</Link>
              </li>
            </LoggedOut>
          </ul>
        </div>
      </nav>
      {/* <nav  className='navbar'>
        
        <img src='/navbarIcon.svg' to='/' className='logo' alt="Radarin" />
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          RADARIN
        </Link>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <LoggedIn>
          <li className='nav-item'>
            <Link
              to='/map'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Map
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/admin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Admin
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/friend-list'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Friends <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          </LoggedIn>
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
        </ul>
        <LoggedIn>
        <li className='nav-item'>
          <LogoutButton className='btnL' onClick={closeMobileMenu}>Log out</LogoutButton>
          </li>
          </LoggedIn>
          <LoggedOut>
        <li className='nav-item'>
        <Link
              to='/sign-in'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
          </LoggedOut>
      </nav> */}
    </>
  );
}

export default Navbar;
