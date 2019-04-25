import React, { Component } from 'react';

import { MDBContainer, MDBCol, MDBRow, MDBMedia, MDBAnimation } from 'mdbreact';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol size="12">
                        <i class="my-4 fas fa-envelope">
                            {' '}
                            Contact at <b>JHeinemann@pwsausa.org</b>
                        </i>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
