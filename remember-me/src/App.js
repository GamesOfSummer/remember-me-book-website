import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import './App.css';

import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Spacer from './Spacer.jsx';
import AboutTheAuthor from './AboutTheAuthor';
import BookInfo from './BookInfo';

class App extends Component {
    render() {
        return (
            <div>
                <MDBContainer fluid>
                    <Nav />
                    <Header />
                    <Spacer />
                    <AboutTheAuthor />
                    <BookInfo />
                </MDBContainer>
            </div>
        );
    }
}

export default App;
