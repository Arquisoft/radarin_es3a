import React from 'react';
import { Marker } from '@react-google-maps/api';
import solidAuth from 'solid-auth-client';
import { getUserByWebId } from '../../api/api';
import { fetchFriends } from '../../services/fetchFriends';

let radius = 50;

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
        this.state = { friends: [], users: []}
        this.state = { users: []}
        radius = this.props.rad
    }

    componentDidMount() {
        this.fetchFriends()
    }

    async fetchFriends() {
        const currentSession = await solidAuth.currentSession();
        if (!currentSession)
            return;


        let friends = await fetchFriends();
        friends = friends.map(friend => {
            return {
                webId: friend,
                location: {
                    lat: 0,
                    lng: 0
                }
            }
        })
        this.setState({friends: friends})

        this.fetchUsers();
    }

    async fetchUsers() {
        try {
            let users = [];
            const currentSession = await solidAuth.currentSession();
            if (!currentSession)
                return;
            this.userLoggedIn = await getUserByWebId(currentSession.webId);
            users.push(this.userLoggedIn);
            this.setState({ users: users });
            
            var friends = this.state.friends
            var that = this

            friends.forEach((friend) => {
                getUserByWebId(friend.webId).then( user => {
                    if (user){
                        friend.location = user.location
                        if (distanceInKmBetweenEarthCoordinates(
                                that.userLoggedIn.location.lat, that.userLoggedIn.location.lng,
                                user.location.lat,user.location.lng) < radius) {
                            users.push(user);
                            that.setState({ users: users });
                        }
                    } 
                })
            })
            setInterval(() => that.update(), 5000)
        }
        catch (error) {
            console.log(error)
        }
    }

    update() {
        let friends = this.state.friends
        let users = this.state.users
        let that = this

        // Actualizar ubicación del usuario
        getUserByWebId(this.userLoggedIn.webId).then(actualUser => {
            that.userLoggedIn = actualUser
            users[0] = that.userLoggedIn;
            that.setState({ users: users });

            friends.forEach(friend => {
                getUserByWebId(friend.webId).then( newUser => {
                    if(!newUser)
                        return;

                    friend.location = newUser.location
                    let inRadius = distanceInKmBetweenEarthCoordinates(
                        actualUser.location.lat, actualUser.location.lng,
                        newUser.location.lat, newUser.location.lng) < radius
                    // Comprobar si ya estaba en el mapa
                    let index = users.findIndex(user => user.webId === newUser.webId)
                    if(index !== -1) {
                        if(newUser.location !== users[index].location) {
                            if(inRadius)
                                users[index] = newUser
                            else 
                                users.splice(index, 1)
                        }
                    } else if(inRadius)
                        users.push(newUser)
                    that.setState({ users: users });
                })
            })
        })
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
                            scaledSize: new window.google.maps.Size(100, 100)
                        }}
                    />
                )
            })
        )
    }
}

export default Markers