import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBMedia, MDBAnimation } from 'mdbreact';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol size="12">
                        <div class="d-flex justify-content-end">
                            <i class="my-2 mx-5 far fa-circle">
                                {' '}
                                <i>Adam's Angels LLC</i>
                            </i>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
