import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBAnimation } from 'mdbreact';
import image from './images/AuthorHeadshot.jpg';
import './AboutTheAuthor.css';

import Contact from './Contact';

export default class AboutTheAuthor extends Component {
    render() {
        return (
            <div id="about">
                <MDBAnimation reveal type="slideInLeft">
                    <MDBRow>
                        <MDBCol md="3" />
                        <MDBCol md="3">
                            <img
                                src={image}
                                class="img-responsive"
                                className="float-right"
                                width="100%"
                                height="auto"
                                alt=""
                            />
                        </MDBCol>
                        <MDBCol md="3">
                            <h1>About the Author</h1>
                            Janalee Tomaseski-Heinemann worked, laughed, and
                            cried with more than one hundred children who died
                            from cancer and also many survivors during her ten
                            years in pediatric oncology. She is the recipient of
                            the American Cancer Society Service and
                            Rehabilitation Award and the John Krey III Memorial
                            Award for Outstanding Humanitarian Support of Cancer
                            Programs in the St. Louis Area. This is the book she
                            promised herself, and all her angels in heaven, that
                            she would write before she joins them.
                            <p />
                            Janalee lives with her husband, Al, in Sarasota,
                            Florida. She is the mother of five children and five
                            surviving grandchildren. Raising a stepson who has
                            Prader-Willi syndrome (PWS), she has mainly (under
                            the name Janalee Heinemann) been recognized for her
                            work and writings nationally and internationally
                            with the syndrome. She is past president of the
                            national organization, Prader-Willi Syndrome
                            Association (USA), past executive director, and past
                            vice president of the international organization,
                            IPWSO. Janalee has her master’s degree in social
                            work from Washington University in St. Louis.
                        </MDBCol>
                        <MDBCol md="3" />
                    </MDBRow>
                </MDBAnimation>
                <Contact />
            </div>
        );
    }
}
