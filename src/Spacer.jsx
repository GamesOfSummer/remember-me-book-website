import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBAnimation } from 'mdbreact';

export default class Spacer extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="12" className="my-3">
                        <p className="text-center">
                            <h1>Testomonials</h1>
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className="mb-3">
                        <MDBAnimation reveal type="slideInLeft">
                            <MDBCard
                                color="winter-neva-gradient"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    <p className="text-left">
                                        {' '}
                                        Oh my gosh <br />
                                        Your Mom <br />
                                        So gifted <br />
                                        So amazing <br />
                                        What an immense blessing and legacy she
                                        is giving to all those families with her
                                        book! I got 1/2 way thru on the
                                        plane.... God blessed her with such an
                                        awesome soul.
                                    </p>
                                    <p className="text-right">-Ali</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="6" className="mb-3">
                        <MDBAnimation reveal type="slideInRight">
                            <MDBCard
                                color="grey lighten-1"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    <p className="text-left">
                                        {' '}
                                        Absolutely love the book and I have been
                                        meaning to email you. So beautifully
                                        written and I will cherish the memories
                                        and “voice” forever. I felt like I was
                                        right back there... in a good way - and
                                        maybe for the first time able to give
                                        myself that breath, that we really did
                                        do it. It wasn’t some black hole that
                                        closed up and was forgotten about. All
                                        those friends, memories, and stories -
                                        we all really existed.... and someone
                                        remembered. ​Thank you.
                                    </p>
                                    <p className="text-right">
                                        - Emily (cancer survivor in the book)
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6" className="mb-3">
                        <MDBAnimation reveal type="slideInLeft">
                            <MDBCard
                                color="grey lighten-1"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    <p className="text-left">
                                        {' '}
                                        The love shared through this author's
                                        journey with these incredible children &
                                        teens over 10 years have left a mark on
                                        my soul. I won't forget their names
                                        either. …Her last chapter hit hard
                                        because it was about her son who I've
                                        come to adore! His faith, courage and
                                        transparency sharing his real and raw
                                        journey is what will impact others. The
                                        minute I started this book, I couldn't
                                        put it down. May God continue to bless
                                        Janalee, her family and all who struggle
                                        with cancer! ​
                                    </p>
                                    <p className="text-right">Ginamarie M</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="6" className="mb-3">
                        <MDBAnimation reveal type="slideInRight">
                            <MDBCard
                                color="winter-neva-gradient"
                                text="white"
                                className="text-center"
                            >
                                <MDBCardBody>
                                    <p className="text-left">
                                        {' '}
                                        …a rare gift which allows us as we read
                                        each page to live the passion and
                                        poignancy of these daily interactions.
                                        Moreover, this book provides invaluable
                                        insight to health care professionals. We
                                        face ongoing challenges in our work; but
                                        we must “speak their name” and above all
                                        remember they are not their disease, but
                                        first and foremost, our patient and
                                        “someone’s child”. ​
                                    </p>
                                    <p className="text-right">
                                        Marilyn C. Dumont-Driscoll, PhD, MD
                                    </p>
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
