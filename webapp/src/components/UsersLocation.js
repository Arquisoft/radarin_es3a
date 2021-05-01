import { Button } from "@material-ui/core";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { getUsers } from "../api/api";
import {notify} from "../services/notify";
import "./UsersLocation.css";
import { fetchName } from "../services/fetchProfile";


class UsersLocation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {users:[]};
      }

    componentDidMount(){
        this.fetchUsers();
    }

    async fetchUsers() {
        try{
            let users = await getUsers();
            let usersFiltrados = [];
            // let todosLosUsers
            for (let index in users) {
                try {
                    //let u = await fetchName(users[index].webId);
                    //todosLosUsers.push(u)
                    let user = await fetchName(users[index].webId);
                    if (!(user === "radarin")) {
                        usersFiltrados.push(users[index])
                    }
                } catch (error) {
                    console.log("No se ha podido insertar: " + users[index].webId);
                }
            }
            this.setState({users:users});
        }
        catch(error)
        {
            console.log("Error fetching user list from restapi. Is it on?");
        }
    }

    render() {
        return (
            <div className="UserList container">
                <h2 className="text-light display-4 p-3">List of location of already registered users</h2>
                <ListGroup>
                    {this.state.users.map(function(user, i){
                        return <ListGroup.Item id={i} key={i}>{user.webId + " (" + user.location.lat 
                            + ", " + user.location.lng + ")"} <Button onClick={() => notify(user.webId)} >Enviar notificación</Button></ListGroup.Item>;
                    })}
                </ListGroup>
           </div>
        );
    }
}

export default UsersLocation;