import React, { Component } from 'react';
import image from './images/headerMain.jpg';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class Header extends Component {
    render() {
        return (
            <div>
                <MDBView waves>
                    <img src={image} className="img-fluid" alt="" />
                    <MDBMask className="flex-center">
                        <div class="mask flex-center waves-effect waves-light rgba-orange-strong">
                            <p class="white-text center">
                                {' '}
                                <h1>
                                    <b>Remember Me</b>
                                </h1>
                                <p>
                                    <b>
                                        Heart-warming, eye opening book promises
                                        to change the way you see life, death,
                                        and cancer through the touching true
                                        stories, words, and sometimes death of
                                        precious children in treatment
                                    </b>
                                </p>
                            </p>
                        </div>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}
