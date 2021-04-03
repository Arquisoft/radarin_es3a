import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { LoggedIn, LoggedOut, LoginButton, LogoutButton } from '@solid/react';
import MapContainer from './components/MapContainer';
import { Route } from "wouter";
import { Welcome } from './components/Welcome'
import PopUpPod from './components/PopUpPod'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UsersLocation from './components/UsersLocation';
import FriendList from './components/FriendList';
import { notify } from './services/mailCtrl'



const useStyles = makeStyles((theme) => ({


  root: {
    flexGrow: 1
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rIcon: {
    width: '3em',
    height: '3em',
    padding: '0.4em'

  },
  button: {
    background: 'linear-gradient(45deg, #aa7fb9 30%, #912c43 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '1.5vh',
  },
  menuButton: {
    width: '5em',
    height: '5em',
    padding: '0em'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSendEmail = () => {
    notify();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#aa7fb9' }} >
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
          
          {/* <a href='/welcome'><img src={LogoR} className={classes.rIcon} alt='icono' /></a> */}
            <LoggedIn>
              <Button href='/map' className = {classes.button}>Mapa</Button>
              <Button href='/locations' className = {classes.button}>Localizaciones</Button>
              <Button className = {classes.button} onClick={handleSendEmail}>sendMail</Button>
            </LoggedIn>
          </Typography>
          <LoggedOut>
            {/* <Button  className="menuButton" href='SignIn'>Sign In</Button> 
            <Button  className="menuButton" href='SignIn'>Sign In</Button> 
            <LoginButton href='/login'>Log In</LoginButton> */}
            <LoginButton popup="popup.html"/>
          </LoggedOut>
          <LoggedIn>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} > <Button  className="menuButton" >Profile</Button>  </MenuItem>
                  {/* <LoggedOut><MenuItem onClick={handleClose} > <LoginButton  className="menuButton" popup="popup.html"/>  </MenuItem></LoggedOut> */}
                  <MenuItem onClick={handleClose}><Button  className="menuButton" >My account</Button></MenuItem>
                  <MenuItem onClick={handleClose}><Button  className="menuButton" href="fRIENDlIST" >Friends</Button></MenuItem>
                  <MenuItem onClick={handleClose}><Button  className="menuButton" >Refresh location</Button></MenuItem>
                  <MenuItem onClick={handleClose}><Button  className="menuButton" >About</Button></MenuItem>
                  <LoggedIn></LoggedIn><MenuItem onClick={handleClose}><LogoutButton  className="menuButton">Log Out</LogoutButton></MenuItem><LoggedIn/>
                </Menu>
              </div>
            )}
          </LoggedIn>
        </Toolbar>
      </AppBar>

      <Route component={Welcome} path="/welcome" />
      <Route component={MapContainer} path="/map" />
      <Route component={PopUpPod} path="/login" />
      <Route component={SignIn} path="/SignIn" />
      <Route component={SignUp} path="/SignUp" />
      <Route component= {UsersLocation} path="/locations" />
      <Route component= {FriendList} path="/fRIENDlIST" />

    </div>

  );
}
