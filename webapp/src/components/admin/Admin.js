import React from 'react';

import { fetchName } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
// import {deleteFromDB} from '../../services/deleteFromDB';
import ListGroup from "react-bootstrap/ListGroup";



class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    async fetchUsers() {
        //TODO orden nombre usuario y dcha eliminar
        //TODO boostrap
        try {
            let users = await getUsers();
            let usersFiltrados = [];
            for (let index in users) {
                try {
                    let user = await fetchName(users[index].webId);

                    if (user != "radarin") {
                        usersFiltrados.push(user)
                    }
                } catch (error) {
                    console.log("No se ha podido insertar: " + users[index].webId);
                }
            }
            console.log(usersFiltrados)
            this.setState({ users: usersFiltrados });
        }
        catch (error) {
            console.log("Error fetching user list from restapi. Is it on?")
        }
    }


    render() {
        return (
            <>
                <div class="row align-items-start">
                    <h1 class="titulo">Opciones de Administrador</h1>
                </div>
                <div class="container">

                    <div class="row">
                        <div class="col-sm">
                            <h2 class="">Manejo Usuarios</h2>
                            <ListGroup>
                                {this.state.users.map(function (user, i) {
                                    return <ListGroup.Item id={i} key={i}class="list-group"><li class="list-group-item">{user}</li>
                                        {/* <Button type="button" class="btn btn-danger" onClick={() => deleteFromDB(user.webId)} >Enviar notificación</Button> */}
                                    </ListGroup.Item>
                                })}
                            </ListGroup>
                        </div>
                        <div class="col-sm">
                            <h2 class="">Usuarios Conectados</h2>
                            <ListGroup>
                                {this.state.users.map(function (user, i) {
                                    return <ListGroup.Item id={i} key={i}>{user.webId}
                                    </ListGroup.Item>
                                })}
                            </ListGroup>
                        </div>

                    </div>
                </div>




            </>
        )
    }
}

export default Admin;