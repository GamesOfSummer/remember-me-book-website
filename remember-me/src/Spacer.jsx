import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBContainer
} from 'mdbreact';

export default class Spacer extends Component {
    render() {
        const styles = {
            color: 'blue',
            'background-color': 'coral',
            'font-weight': 'bold',
            height: '1000 px'
        };

        return (
            <div>
                <MDBContainer>
                    <MDBRow className="mb-4">
                        <MDBCol sm="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        Special title treatment
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        Oh my gosh <br />
                                        Your Mom <br />
                                        So gifted <br />
                                        So amazing <br />
                                        What an immense blessing and legacy she
                                        is giving to all those families with her
                                        book! I got 1/2 way thru on the
                                        plane.... God blessed her with such an
                                        awesome soul. -Ali
                                    </MDBCardText>
                                    <MDBBtn color="primary">
                                        go somewhere
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol sm="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        Special title treatment
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                    </MDBCardText>
                                    <MDBBtn color="primary">
                                        go somewhere
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <br />
            </div>
        );
    }
}
