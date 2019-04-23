import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBCardHeader
} from 'mdbreact';

export default class Spacer extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <MDBCard
                            color="winter-neva-gradient"
                            text="white"
                            className="text-center"
                        >
                            <MDBCardBody>
                                Oh my gosh <br />
                                Your Mom <br />
                                So gifted <br />
                                So amazing <br />
                                What an immense blessing and legacy she is
                                giving to all those families with her book! I
                                got 1/2 way thru on the plane.... God blessed
                                her with such an awesome soul. -Ali
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        <MDBCard
                            color="grey"
                            text="white"
                            className="text-center"
                        >
                            <MDBCardBody>
                                Absolutely love the book and I have been meaning
                                to email you. So beautifully written and I will
                                cherish the memories and “voice” forever. I felt
                                like I was right back there... in a good way -
                                and maybe for the first time able to give myself
                                that breath, that we really did do it. It wasn’t
                                some black hole that closed up and was forgotten
                                about. All those friends, memories, and stories
                                - we all really existed.... and someone
                                remembered. Thank you � Emily (cancer survivor
                                in the book)
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <br />
            </div>
        );
    }
}
