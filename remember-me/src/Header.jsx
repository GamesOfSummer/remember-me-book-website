import React, { Component } from 'react';
import image from './images/headerMain.jpg';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

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
                <MDBContainer fluid>
                    <MDBView waves>
                        <img src={image} className="img-fluid" alt="" />
                        <MDBMask className="flex-center" pattern={9}>
                            <p className="white-text">patern 9</p>
                        </MDBMask>
                    </MDBView>
                </MDBContainer>

                <h1>Remember Me</h1>

                <p>
                    Heart-warming, eye opening book promises to change the way
                    you see life, death, and cancer through the touching true
                    stories, words, and sometimes death of precious children in
                    treatment
                </p>
            </div>
        );
    }
}
