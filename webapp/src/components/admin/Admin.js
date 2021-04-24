import React from 'react';
import { fetchFriends } from '../../services/fetchFriends';
import { fetchName, fetchPhoto } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
import {deleteFromDB} from '../../services/deleteFromDB';
import solidAuth from 'solid-auth-client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    async fetchUsers() {
        try {
            let users = await getUsers();
            this.setState({ users: users });
        }
        catch (error) {
            console.log("Error fetching user list from restapi. Is it on?")
        }
    }


    render() {
        return (
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">

                        <div class="container" >
                            <div class="row align-items-start">
                                <h1 class="titulo">Opciones de Administrador</h1>
                            </div>
                            <div class="col" >
                                <h2 class="">Manejo Usuarios</h2>
                                <ListGroup>
                                    {this.state.users.map(function (user, i) {
                                        return <ListGroup.Item id={i} key={i}>{user.webId }
                                         <Button onClick={() => deleteFromDB(user.webId)} >Enviar notificación</Button>
                                         </ListGroup.Item>
                                    })}
                                </ListGroup>
                            </div>
                            <div class="col" >
                                <h2 class="">Usuarios Conectados</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

export default Admin;