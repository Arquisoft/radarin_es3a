import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LogoR from './LogoR.svg';
import Button from '@material-ui/core/Button';
import {LoggedIn, LoggedOut} from '@solid/react';
import MapContainer from './components/MapContainer';
import {Route} from "wouter";
import {Welcome} from './components/Welcome'
import PopUpPod from './components/PopUpPod'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rIcon : {
    width: '30%'
  },
  button: {
    background: 'linear-gradient(45deg, #aa7fb9 30%, #912c43 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '1.5vh',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#aa7fb9'}} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <a href='/welcome'><img src = {LogoR} className = {classes.rIcon} alt= 'icono'/></a>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button href='/map' className = {classes.button}>Mapa</Button>
          </Typography>
          <LoggedOut>
            <Button href='/login' className = {classes.button}>Login</Button>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          </LoggedIn>
        </Toolbar>
      </AppBar>
      <Route component= {Welcome} path="/welcome" />
      <Route component= {MapContainer} path="/map" />
      <Route component= {PopUpPod} path="/login" />
    </div>
    
  );
}
