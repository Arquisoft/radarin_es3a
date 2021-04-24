import React from 'react';

import { fetchName } from '../../services/fetchProfile';
import './Admin.css'
import { getUsers } from '../../api/api';
import {deleteUser} from '../../services/deleteFromDB';
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
        if (!this.state.users) {
            return (<div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>)
        } else {

            return (
                <>
                <Container fluid={4} className="p-3">
                    {/* <Container> */}

                        <Row>
                            <Col md={4}>
                                <div>
                                    <h2 class="display-4">Manejo Usuarios</h2>
                                    <ListGroup>
                                        {this.state.users.map(function (user, i) {
                                            return <ListGroup.Item id={i} key={i} class="list-group"><li class="list-group-item">{user}</li>
                                                {<Button type="button" class="btn btn-danger" onClick={() => deleteUser(user.webId)} >Eliminar usuario</Button>}
                                            </ListGroup.Item>
                                        })}
                                    </ListGroup>
                                </div>

                            </Col>
                            <Col md={4}>
                                <div><h2 class="display-4">Usuarios Conectados</h2>
                                    <ListGroup>
                                        {this.state.users.map(function (user, i) {
                                            return <ListGroup.Item id={i} key={i}>{user.webId}
                                            </ListGroup.Item>
                                        })}
                                    </ListGroup>
                                </div>
                            </Col>
                        </Row>
                    {/* </Container> */}
                </Container>
                </>
            )
        }
    }
}

export default Admin;