import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoginButton } from '@solid/react';
import LogoR from '../../LogoR.svg';
import { ProviderLogin, withWebId } from '@inrupt/solid-react-components';
import { grey } from '@material-ui/core/colors';
import './SignIn.css'
import Provider from './provider'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  rIcon: {
    whidth: '100%',
    height:'100%',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container  component="main" maxWidth="xs">
      <CssBaseline  />
      <div  className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src={LogoR} className={classes.rIcon} alt='icono' />
        </Avatar>
        <Typography class="text" component="h1" variant="h5">
        Login
        </Typography>
        <form class="text" className={classes.form} noValidate>
          {/* <LoginButton class="text" className="loginButton" popup="https://inrupt.net/common/popup.html">Login</LoginButton> */}
          { <ProviderLogin class="text"
              selectPlaceholder={("Selecciona tu Proveedor")}
              inputPlaholder={("Web Id")}
              formButtonText={("Login")}
              btnTxtWebId={("Insertar WebID")}
              btnTxtProvider={("Selecciona tu Proveedor")}
              className="provider-login-component"
              callbackUri={`${window.location.origin}/welcome`}
              errorsText={{
                unknown: ("Error Desconocido"),
                webIdNotValid: ("Error webID No Valido"),
                emptyProvider: ("Error Proveedor vacio"),
                emptyWebId: ("Error webID vacio"),
              }}
              theme={{
                buttonLogin: "ids-link",
                inputLogin: "",
                linkButton: "",
              }}
              providers={Provider.getIdentityProviders().value}
            /> }
          <Grid  container>

            <Grid item>
              <Link class="text" href="https://solidproject.org/users/get-a-pod"  target="_blank" variant="body2">
                {"Don't have a Solid POD? Get One now."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}