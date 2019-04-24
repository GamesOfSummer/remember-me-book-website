import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBAnimation } from 'mdbreact';

export default class Spacer extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <MDBAnimation reveal type="slideInLeft">
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
                                    giving to all those families with her book!
                                    I got 1/2 way thru on the plane.... God
                                    blessed her with such an awesome soul. -Ali
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        <MDBAnimation reveal type="slideInRight">
                            <MDBCard
                                color="grey lighten-1"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    Absolutely love the book and I have been
                                    meaning to email you. So beautifully written
                                    and I will cherish the memories and “voice”
                                    forever. I felt like I was right back
                                    there... in a good way - and maybe for the
                                    first time able to give myself that breath,
                                    that we really did do it. It wasn’t some
                                    black hole that closed up and was forgotten
                                    about. All those friends, memories, and
                                    stories - we all really existed.... and
                                    someone remembered. Thank you � Emily
                                    (cancer survivor in the book)
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <MDBAnimation reveal type="slideInLeft">
                            <MDBCard
                                color="grey lighten-1"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    Janalee! We received the book and THANK YOU!
                                    ...for sending it and especially for a well
                                    written tribute to these wonderful kids.
                                    Your book is a work of love. We will also
                                    never forget you and the kindness and caring
                                    and REAL help for Jason and us too. Still
                                    hard to believe all the amazing things you
                                    did, and succeeded in getting others to do!
                                    Larry (parent whose son is in the book)
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                        <MDBAnimation reveal type="slideInRight">
                            <MDBCard
                                color="winter-neva-gradient"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    Wow. What a powerful book. I was both moved
                                    by the stories and learned a lot from your
                                    takeaways. Congrats again. You are truly
                                    amazing in what you&#39;ve done for others
                                    throughout your life. Rob Lutz
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>

                <br />
            </div>
        );
    }
}
