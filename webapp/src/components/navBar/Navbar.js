import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {LoggedOut,LoggedIn, LogoutButton, LoginButton} from '@solid/react'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
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
      <nav className='navbar'>
        <img src='/navbarIcon.svg' to='/' className='logo'/>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          RADARIN
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/map'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Map
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
          <LoginButton className='btnL' onClick={closeMobileMenu} popup="popup.html">Sign In</LoginButton>
          </li>
          </LoggedOut>
      </nav>
    </>
  );
}

export default Navbar;
