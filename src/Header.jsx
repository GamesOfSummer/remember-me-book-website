import React, { Component } from 'react';
import image from './images/headerMain.jpg';
import { Card, Jumbotron, Button } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        const divStyle = {
            color: 'blue'
        };

        const styles = {
            color: 'white',
            'font-weight': 'bold',
            height: '1000 px',
            backgroundImage: `url(${image})`
        };

        return (
            <div>
                <Jumbotron style={styles}>
                    <h1>Remember Me</h1>
                    <br />
                    <p>
                        Heart-warming, eye opening book promises to change the
                        way you see life, death, and cancer through the touching
                        true stories, words, and sometimes death of precious
                        children in treatment
                    </p>

                    <Button bsStyle="primary" href="#">
                        Buy On Amazon
                    </Button>
                </Jumbotron>
                ;
            </div>
        );
    }
}
