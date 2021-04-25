import React from 'react';

import { fetchName } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
import { deleteUser } from '../../services/deleteFromDB';
// import ListGroup from "react-bootstrap/ListGroup";
import { Button, Container, Row, Col } from 'react-bootstrap';



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
            let usersFiltrados = [];
            let todosLosUsers
            for (let index in users) {
                try {
                    //let u = await fetchName(users[index].webId);
                    //todosLosUsers.push(u)
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
            //this.setState({ users: todosLosUsers });
        }
        catch (error) {
            console.log("Error fetching user list from restapi. Is it on?")
        }
    }


    render() {


        return (
            <>
                
                <div class="container border border-light rounded">
                    <div class="row">
                        <div class="col-md-auto">
                            <h2 class="display-4 text-light">Manejo Usuarios</h2>

                            {this.state.users.map(function (user, i) {
                                return (
                                    <div class="card w-100 text-white bg-dark">
                                        <div class="card-body ">
                                            <h5 class="card-title">{user}</h5>
                                            {<Button type="button" class="btn btn-danger" onClick={() => deleteUser(user.webId)} >Eliminar usuario</Button>}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div class="col-md-auto">
                            <h2 class="display-4 text-light">Usuarios Conectados</h2>
                            {this.state.users.map(function (user, i) {
                                return (
                                    <div class="card w-100 text-white bg-dark">
                                        <div class="card-body ">
                                            <h5 class="card-title">{user}</h5>
                                            <span class="badge badge-pill badge-success">Success</span>
                                            <span class="badge badge-pill badge-danger">Danger</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>


            </>
        )

    }
}

export default Admin;