import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LogoR from '../../LogoR.svg';
import { ProviderLogin,
  FormModel,
  Spinner} from '@inrupt/solid-react-components'; 
import './SignIn.css'
import Provider from './provider'


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
      {/* <ProfileViewer
          {...{
            webId,
            direction: 'down',
            viewMoreText: 'See Profile',
            onError: error => {
              // eslint-disable-next-line no-console
              console.log('ERROR', error.statusText);
            },
            onClick: false
          }}
        >
          <span>Hover over me!</span>
        </ProfileViewer> */}
        <Avatar className={classes.avatar}>
        <img src={LogoR} className={classes.rIcon} alt='icono' />
        </Avatar>
        <Typography class="text" component="h1" variant="h5">
        Login
        </Typography>
        
          
          { <ProviderLogin class="text"
              selectPlaceholder={("Selecciona tu Proveedor")}
              inputPlaholder={("Web Id")}
              formButtonText={("Login")}
              btnTxtWebId={("Insertar WebID")}
              btnTxtProvider={("Selecciona tu Proveedor")}
              className="provider-login-component"
              callbackUri={`${window.location.origin}/`}
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
            {/* <LoginButton class="text" className="loginButton" popup="https://inrupt.net/common/popup.html">Login</LoginButton> */}
            {/* <LoginButton className='btnL'  popup="popup.html">Login</LoginButton> */}
            <FormModel
        {...{
          modelSource: 'https://jmartin.inrupt.net/public/formmodel/float.ttl#formRoot',
          dataSource: 'https://jmartin.inrupt.net/profile/card#me',
          options: {
            theme: {
              inputText: 'sdk-input',
              inputCheckbox: 'sdk-checkbox checkbox',
              inputTextArea: 'sdk-textarea',
              multiple: 'sdk-multiple-button',
              form: 'inrupt-sdk-form',
              childGroup: 'inrupt-form-group'
            },
            autosaveIndicator: Spinner,
            autosave: true,
            viewer: false,
            language: 'en'
          },
          onError: error => {
            // eslint-disable-next-line no-console
            console.log(error, 'error');
          },
          onSuccess: success => {
            // eslint-disable-next-line no-console
            console.log(success);
          },
          onSave: response => {
            // eslint-disable-next-line no-console
            console.log(response);
          },
          onAddNewField: response => {
            // eslint-disable-next-line no-console
            console.log(response);
          },
          onDelete: response => {
            // eslint-disable-next-line no-console
            console.log(response);
          }
        }}
        liveUpdate
      />
          <Grid  container>

            <Grid item>
              <Link class="text" href="https://solidproject.org/users/get-a-pod"  target="_blank" variant="body2">
                {"Don't have a Solid POD? Get One now."}
              </Link>
            </Grid>
          </Grid>
        
      </div>

    </Container>
  );
}