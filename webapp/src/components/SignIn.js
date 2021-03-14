import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoggedIn, LoggedOut, LogoutButton, LoginButton } from '@solid/react';
import LogoR from '../LogoR.svg';
import { ProviderLogin, withWebId } from '@inrupt/solid-react-components';


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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src={LogoR} className={classes.rIcon} alt='icono' />
        </Avatar>
        <Typography component="h1" variant="h5">
        Login
        </Typography>
        <form className={classes.form} noValidate>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="WebID"
            label="WebID"
            name="WebID"
            autoComplete="WebID"
            autoFocus
          /> */}

<LoginButton className="loginButton" popup="https://inrupt.net/common/popup.html">Login</LoginButton>
          <ProviderLogin errorsText={{emptyWebId: 'Hola q tal t olvidaste algo crack'}} />
          {/* <PrivateRoute component={Container} /> */}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button> */}
          {/* <LoginButton className={classes.submit} >Connect to Solid POD</LoginButton> */}
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="https://solidproject.org/users/get-a-pod"  target="_blank" variant="body2">
                {"Don't have a Solid POD? Get One now."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}