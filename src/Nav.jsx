import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Remember Me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </div>
        );
    }
}
