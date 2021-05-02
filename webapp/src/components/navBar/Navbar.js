import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoggedOut, LoggedIn, LogoutButton } from '@solid/react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import solidAuth from 'solid-auth-client';

function Navbar() {
  function setClick(){
    return false;
  }

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Saltaba error, comentado - Raúl
  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick();

  const [admin, setAdmin] = useState(false);

  async function isAdmin() {
    try {
      let currentSession = await solidAuth.currentSession();
      let webId = currentSession.webId;
      let temp = webId === "https://radarines3a.inrupt.net/profile/card#me";
      return temp;
    } catch(err) {
      return false;
    }
  }

   useEffect(() => {
    isAdmin().then(result => {
      setAdmin(result);
    });
   }, []);

  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <Link to="/" className="nav-links navbar-logo" onClick={closeMobileMenu} ><p className="logoLetra logo navbar-brand"><img src="/navbarIcon.svg" to="/" alt="Radarin" ></img>RADARIN</p></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"  aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarNavDropdown" className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-links nav-link" onClick={closeMobileMenu}>Home</Link>
            </li>

            <LoggedIn>
            { !admin ?
              <li className="nav-item">
               <Link to='/map' className='nav-links nav-link' onClick={closeMobileMenu}>Map</Link>
              </li>
            : null}  
            </LoggedIn>

            { admin ?
              <li className="nav-item">
                <Link to='/admin' className='nav-links nav-link' onClick={closeMobileMenu}>Admin</Link>
              </li>
            : null}
            
            { !admin ?
              <li className="nav-item">
                  <Link to='/about-us' className='nav-links nav-link' onClick={closeMobileMenu}>About us</Link>
              </li>
            : null} 

            <LoggedIn>
              { !admin ?
                <li className="nav-item dropdown">
                  <Link to="#" className='nav-links nav-link dropdown-toggle' onClick={closeMobileMenu} id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Friends <i className='fas fa-caret-down' />
                    </Link>
  
                  <div className="dropdown-menu text-light bg-dark" aria-labelledby="navbarDropdownMenuLink">
                    <Link to='/friend-list' className='dropdown-item text-light bg-dark nav-links' onClick={closeMobileMenu} >FriendList</Link>
                    <Link to='/locations' className='dropdown-item text-light bg-dark nav-links' onClick={closeMobileMenu} >Locations of Friends</Link>
                  </div>
                </li>
              : null} 
            </LoggedIn>

            <LoggedIn>
              <li className='nav-item'>
                <LogoutButton type="button" className='btn btn-danger btnL' onClick={closeMobileMenu}>Log out</LogoutButton>
              </li>
            </LoggedIn>

            <LoggedOut>
              <li className="nav-item">
                <Link to="/sign-in" type="button" className="btn btn-primary nav-links" onClick={closeMobileMenu} >Sign In</Link>
              </li>
            </LoggedOut>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
