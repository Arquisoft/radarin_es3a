import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoggedOut, LoggedIn, LogoutButton } from '@solid/react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

function Navbar() {
  const [ setClick] = useState(false);


  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Saltaba error, comentado - Raúl
  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark ">
        
        <Link to='/' className='nav-links' onClick={closeMobileMenu} class=" navbar-logo" ><p class="logoLetra"><img src='/navbarIcon.svg' to='/' className='logo' class="navbar-brand " alt="Radarin" ></img>RADARIN</p></Link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"  aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  text-light bg-dark" id="navbarNavDropdown" class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}  class="nav-link">Home</Link>
            </li>
            <LoggedIn>
            <li class="nav-item">
               <Link to='/map' className='nav-links' onClick={closeMobileMenu}  class="nav-link">Map</Link>
            </li>
            <li class="nav-item">
              <Link to='/admin' className='nav-links' onClick={closeMobileMenu}  class="nav-link">Admin</Link>
            </li>
            </LoggedIn>
            <li class="nav-item">
                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}  class="nav-link">About us</Link>
            </li>
            <LoggedIn>
              <li class="nav-item dropdown">
                 <Link to='/friend-list' className='nav-links' onClick={closeMobileMenu}class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Friends <i className='fas fa-caret-down' />
                  </Link>
 
                <div class="dropdown-menu text-light bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <Link to='/friend-list' className='nav-links' onClick={closeMobileMenu} class="dropdown-item text-light bg-dark" >FriendList</Link>
                  <Link to='/locations' className='nav-links' onClick={closeMobileMenu} class="dropdown-item text-light bg-dark" >Locations of Friends</Link>
                </div>
              </li>
              <li class='nav-item'>
                <LogoutButton type="button" className='btnL' class='btn btn-danger' onClick={closeMobileMenu}>Log out</LogoutButton>
              </li>
            </LoggedIn>
            <LoggedOut>
              <li class='nav-item'>
                <Link to='/sign-in' type="button" className='nav-links' onClick={closeMobileMenu}  class='btn btn-primary'>Sign In</Link>
              </li>
            </LoggedOut>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
