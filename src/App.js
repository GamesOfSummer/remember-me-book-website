import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';

import Header from './Header.jsx';
import Spacer from './Spacer.jsx';

import BookInfo from './BookInfo';
import AboutTheAuthor from './AboutTheAuthor';
import Footer from './Footer';

class App extends Component {
    render() {
        var styles = {
            padding: '0px'
        };

        return (
            <MDBContainer fluid style={styles}>
                <Header />
                <Spacer />
                <BookInfo />
                <AboutTheAuthor />
                <Footer />
            </MDBContainer>
        );
    }
}

export default App;
