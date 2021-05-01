import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoggedOut, LoggedIn, LogoutButton } from '@solid/react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

function Navbar() {
  function setClick(){
    return false;
  }

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Saltaba error, comentado - Raúl
  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick();

  const isAdmin = false;

  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <Link to='/' className='nav-links navbar-logo' onClick={closeMobileMenu} ><p className="logoLetra logo navbar-brand"><img src="/navbarIcon.svg" to="/" alt="Radarin" ></img>RADARIN</p></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"  aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarNavDropdown" className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className='nav-links nav-link' onClick={closeMobileMenu}>Home</Link>
            </li>
            <LoggedIn>
            <li className="nav-item">
               <Link to='/map' className='nav-links nav-link' onClick={closeMobileMenu}>Map</Link>
            </li>
            </LoggedIn>

            { isAdmin ?
              <li className="nav-item">
                <Link to='/admin' className='nav-links nav-link' onClick={closeMobileMenu}>Admin</Link>
              </li>
            : null}
            
            <li className="nav-item">
                <Link to='/about-us' className='nav-links nav-link' onClick={closeMobileMenu}>About us</Link>
            </li>
            <LoggedIn>
              <li className="nav-item dropdown">
                 <Link to="#" className='nav-links nav-link dropdown-toggle' onClick={closeMobileMenu} id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Friends <i className='fas fa-caret-down' />
                  </Link>
 
                <div className="dropdown-menu text-light bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <Link to='/friend-list' className='dropdown-item text-light bg-dark nav-links' onClick={closeMobileMenu} >FriendList</Link>
                  <Link to='/locations' className='dropdown-item text-light bg-dark nav-links' onClick={closeMobileMenu} >Locations of Friends</Link>
                </div>
              </li>
              </LoggedIn>

              <LoggedIn>
              <li className='nav-item'>
                <LogoutButton type="button" className='btn btn-danger btnL' onClick={closeMobileMenu}>Log out</LogoutButton>
              </li>
            </LoggedIn>
            <LoggedOut>
              <li className='nav-item'>
                <Link to='/sign-in' type="button" className='btn btn-primary nav-links' onClick={closeMobileMenu} >Sign In</Link>
              </li>
            </LoggedOut>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
