import React from 'react';
import { fetchFriends } from '../../services/fetchFriends';
import { fetchName, fetchPhoto } from '../../services/fetchProfile';
import './FriendList.css'

class FriendList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {users: []}
      }

    componentDidMount(){
        this.fetchUsers()
    }

    async fetchUsers() {
        let that = this;
        let users = await fetchFriends();
        users = users.map(function(u, i) {
            let user = {
                webId: u,
                photo: './user.png',
                name: ""
            };
            fetchPhoto(user.webId).then(photo => { 
                if(!photo)
                    return
                users[i].photo = photo;
                that.setState({users: users})
            });
            fetchName(user.webId).then(name =>  {
                if(!name)
                    name = users[i].webId;
                users[i].name = name
                that.setState({users: users})
            });

            return user;
        });
        this.setState({users: users})
    }
    
    render() {
        return (
            <>
                <h1>Lista de amigos</h1>
                <div>
                    {this.state.users.map(function(user, i){
                        return <div id={i} key={i}>  <h3>{user.name} </h3> <img className="friend-img" src={ user.photo }/></div>
                    })}
                </div>
            </>
        )
    }
}

export default FriendList;