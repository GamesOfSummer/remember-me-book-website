import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';

import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Spacer from './Spacer.jsx';
import AboutTheAuthor from './AboutTheAuthor';
import BookInfo from './BookInfo';

class App extends Component {
    render() {
        return (
            <MDBContainer fluid>
                <Nav />
                <Header />
                <Spacer />
                <BookInfo />
                <AboutTheAuthor />
            </MDBContainer>
        );
    }
}

export default App;
