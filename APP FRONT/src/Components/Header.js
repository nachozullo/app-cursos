import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";

function Header() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" >
            <Navbar.Brand href="/"> App Cursos </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <LinkContainer to="/">
                            <Nav.Link> Listado Cursos</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/alumnos">
                            <Nav.Link> Listado Alumnos</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/cursos/nuevo">
                            <Nav.Link> Nuevo Curso</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header