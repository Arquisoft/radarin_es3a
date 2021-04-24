import React from 'react';
import { fetchFriends } from '../../services/fetchFriends';
import { fetchName, fetchPhoto } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
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
        this.state = {users:[]}
      }

    componentDidMount(){
        this.fetchUsers()
    }

    async fetchUsers() {
        try{
            let users = await getUsers();
            this.setState({users:users});
        }
        catch(error)
        {
            console.log("Error fetching user list from restapi. Is it on?")
        }
    }


    render() {
        return (
           <div>
                <h1 class="titulo">Opciones de Administrador</h1>
           </div>
           

        )
    }
}

export default Admin;