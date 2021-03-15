import React from 'react';
import { Marker } from '@react-google-maps/api';
import solidAuth from 'solid-auth-client';
import { getUsers } from '../api/api';


class Markers extends React.Component{
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
            var session = await solidAuth.currentSession(); // Obtener sesión del usuario actual
            if(session) {
                // Modificar ubicación del usuario
                users.find(u => u.webId === session.webId).location = this.props.userLocation;
            }
            this.setState({users:users});
        }
        catch(error)
        {
            console.log("Error fetching user list from restapi. Is it on?")
        }
    }

    render() {
        return (
            this.state.users.map(item => {
                return (
                <Marker key={item.webId} position={item.location}/>
                )
              })
        )
    }
}

export default Markers