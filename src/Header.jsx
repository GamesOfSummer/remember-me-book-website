import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation
} from 'mdbreact';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div id="apppage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBAnimation type="fadeIn" delay="0.0s">
                            <MDBRow>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                        Remember Me{' '}
                                    </h1>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                        Heart-warming, eye opening book promises
                                        to change the way you see life, death,
                                        and cancer through the touching true
                                        stories, words, and sometimes death of
                                        precious children in treatment
                                    </h6>

                                    <MDBBtn gradient="winter-neva">
                                        <a href="https://www.amazon.com/Remember-Me-Memoir-Children-Combating-ebook/dp/B07PFYN1KV/">
                                            Buy on Amazon
                                        </a>
                                    </MDBBtn>
                                    <MDBBtn gradient="winter-neva">
                                        <a href="https://www.barnesandnoble.com/w/remember-me-janalee-tomaseski-heinemann-msw/1131142845?ean=2940161321973">
                                            Buy on Barnes and Noble
                                        </a>
                                    </MDBBtn>
                                </div>
                                <MDBCol md="6" xl="5" className="mt-xl-5" />
                            </MDBRow>
                        </MDBAnimation>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}
