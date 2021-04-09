import React from 'react';
import { Marker } from '@react-google-maps/api';
import solidAuth from 'solid-auth-client';
import { getUserByWebId, getUsers } from '../../api/api';
import { fetchFriends } from '../../services/fetchFriends';
import MapComponent from './MapComponent';
import { map } from 'rdf-namespaces/dist/schema';

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  
  function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
  
    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
  }

class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: []}
    }

    componentDidMount() {
        this.fetchUsers()
    }


    async fetchUsers() {
        try {
            let users = [];

            const currentSession = await solidAuth.currentSession();
            if (!currentSession)
                return;


            let friends = await fetchFriends();
            friends.push(currentSession.webId);

            
            var userLoggedIn = await getUserByWebId(currentSession.webId);
            console.log(userLoggedIn);
            console.log(userLoggedIn.location.lat);
            console.log(userLoggedIn.location.lng);
            const radius = 10
            
            for (let index in friends) {
                
                let user = await getUserByWebId(friends[index]);
                    if (user){
                        // console.log(user);
                        if (distanceInKmBetweenEarthCoordinates(
                            userLoggedIn.location.lat,userLoggedIn.location.lng,
                            user.location.lat,user.location.lng) < radius)
                             {
                            users.push(user);
                        }
                        // users.push(user);
                    } 

                
            }
            this.setState({ users: users });
        }
        catch (error) {
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
                            scaledSize: new window.google.maps.Size(100, 100),
                        }}
                    />
                )
            })
        )
    }
}

export default Markers