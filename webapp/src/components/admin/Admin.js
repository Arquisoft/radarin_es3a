import React from 'react';

import { fetchName } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
<<<<<<< Updated upstream
// import {deleteFromDB} from '../../services/deleteFromDB';
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Container, Row, Col } from 'react-bootstrap';

=======
import {deleteUser} from '../../services/deleteFromDB';
import solidAuth from 'solid-auth-client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
>>>>>>> Stashed changes


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
<<<<<<< HEAD
        return (
            <>
                <div class="row align-items-start">
<<<<<<< Updated upstream
                    <h1 class="titulo">Opciones de Administrador</h1>
                </div>
                <div class="container">
=======
                    <div class="col">

                        <div class="container" >
                            <div class="row align-items-start">
                                <h1 class="titulo">Opciones de Administrador</h1>
                            </div>
                            <div class="col" >
                                <h2 class="">Manejo Usuarios</h2>
                                <ListGroup>
                                    {this.state.users.map(function (user, i) {
                                        return <ListGroup.Item id={i} key={i}>{user.webId }
                                         <Button onClick={() => deleteUser(user.webId)} >Enviar notificación</Button>
                                         </ListGroup.Item>
                                    })}
                                </ListGroup>
                            </div>
                            <div class="col" >
                                <h2 class="">Usuarios Conectados</h2>
                            </div>
>>>>>>> Stashed changes

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
=======
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
>>>>>>> Admin-Danger-Zone
                        </div>
                    </div>




                </>
            )
        }
    }
}

export default Admin;