import React, { Component } from 'react';
import image from './images/headerMain.jpg';
import {
    MDBJumbotron,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCardTitle,
    MDBIcon
} from 'mdbreact';

export default class Header extends Component {
    render() {
        return (
            <div>
                <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol
                        className="text-white text-center py-5 px-4 my-5"
                        style={{
                            background:
                                'url(' + image + ') fixed center no-repeat',
                            'background-size': `cover`,
                            opacity: '0.2'
                        }}
                    >
                        <MDBCol className="py-5">
                            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                                Remember Me
                            </MDBCardTitle>
                            <p className="mx-5 mb-5">
                                {' '}
                                Heart-warming, eye opening book promises to
                                change the way you see life, death, and cancer
                                through the touching true stories, words, and
                                sometimes death of precious children in
                                treatment
                            </p>
                            <MDBBtn outline color="white" className="mb-5">
                                <MDBIcon icon="clone" className="mr-2" /> View
                                project
                            </MDBBtn>
                        </MDBCol>
                    </MDBCol>
                </MDBJumbotron>
            </div>
        );
    }
}
