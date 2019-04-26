import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBMedia, MDBAnimation } from 'mdbreact';

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <MDBRow id="footer">
                    <MDBCol size="12">
                        <div class="d-flex justify-content-end gradient">
                            <i class="my-2 mx-5 far fa-circle">
                                {' '}
                                <i>Adam's Angels Publishing LLC</i>
                            </i>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
