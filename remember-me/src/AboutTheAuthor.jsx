import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import image from './images/AuthorHeadshot.jpg';

export default class AboutTheAuthor extends Component {
    render() {
        return (
            <div>
                <h5>About the Author</h5>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            {' '}
                            <img
                                width={300}
                                height={300}
                                className="mr-3"
                                src={image}
                                alt="Generic placeholder"
                            />
                        </MDBCol>
                        <MDBCol md="8" />
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
