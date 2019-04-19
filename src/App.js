import React, { Component } from 'react';

import './App.css';

import { Container } from 'react-bootstrap';

import Nav from './Nav.jsx';
import Header from './Header.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Container />
                <div className="App">
                    <Nav />
                    <Header />
                </div>
            </div>
        );
    }
}

export default App;
