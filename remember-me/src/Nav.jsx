import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MDBNav
                        color="peach-gradient"
                        className="justify-content-end"
                    >
                        <MDBNavItem>
                            <MDBNavLink active to="#!">
                                Active
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Link</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Link</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink disabled to="#!">
                                Disabled
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                </BrowserRouter>
            </div>
        );
    }
}
