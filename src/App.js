import React, { Component } from 'react';

import './App.css';

import { Container } from 'react-bootstrap';

import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Spacer from './Spacer.jsx';
import AboutTheAuthor from './AboutTheAuthor';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Nav />
                    <Header />
                    <Spacer />
                    <AboutTheAuthor />
                </div>
            </div>
        );
    }
}

export default App;
