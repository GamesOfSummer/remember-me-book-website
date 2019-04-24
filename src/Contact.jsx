import React, { Component } from 'react';

import { MDBContainer, MDBCol, MDBRow, MDBMedia, MDBAnimation } from 'mdbreact';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol size="12">
                        <i class="fas fa-envelope"> JHeinemann@pwsausa.org</i>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
