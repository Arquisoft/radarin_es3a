import React from 'react';
import { Marker } from '@react-google-maps/api';
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