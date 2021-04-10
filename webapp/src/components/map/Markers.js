import React from 'react';
import { Marker } from '@react-google-maps/api';
import solidAuth from 'solid-auth-client';
import { getUserByWebId, getUsers } from '../../api/api';
import { fetchFriends } from '../../services/fetchFriends';


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
            let users = [];

            const currentSession = await solidAuth.currentSession();
            if(!currentSession)
                return;


            let friends = await fetchFriends();
            friends.push(currentSession.webId);
            
            for(let index in friends) {
                let user = await getUserByWebId(friends[index]);
                if(user) 
                    users.push(user);
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
                <Marker 
                key={item.webId}
                position={item.location}
                icon={{
                url: '/iconLogo.svg',
                scaledSize: new window.google.maps.Size(100,100),
                }}
                />
                )
              })
        )
    }
}

export default Markers