import React from 'react';

import { fetchName } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
// import {deleteFromDB} from '../../services/deleteFromDB';
import ListGroup from "react-bootstrap/ListGroup";
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
        if (!this.state.users) {
            return (<div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>)
        } else {

            return (
                <>
                    <Container>
                    <div class="row align-items-start">
                        <h1 class="display-1 text-primary">Opciones de Administrador</h1>
                    </div>
                        <Row>
                            <Col md={4}>
                            <h2 class="display-4">Manejo Usuarios</h2>
                                <ListGroup>
                                    {this.state.users.map(function (user, i) {
                                        return <ListGroup.Item id={i} key={i} class="list-group"><li class="list-group-item">{user}</li>
                                            {/* <Button type="button" class="btn btn-danger" onClick={() => deleteFromDB(user.webId)} >Enviar notificación</Button> */}
                                        </ListGroup.Item>
                                    })}
                                </ListGroup>
                            </Col>
                            <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                        </Row>
                    </Container>

                    
                    <div class="container">

                        <div class="row">
                            <div class="col-md-4">

                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h2 class="display-4">Usuarios Conectados</h2>
                                    <ListGroup>
                                        {this.state.users.map(function (user, i) {
                                            return <ListGroup.Item id={i} key={i}>{user.webId}
                                            </ListGroup.Item>
                                        })}
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>




                </>
            )
        }
    }
}

export default Admin;