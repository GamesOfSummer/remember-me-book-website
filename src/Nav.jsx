import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MDBNav
                        color="winter-neva-gradient"
                        className="justify-content-end"
                    >
                        <MDBNavItem>
                            <MDBNavLink className="white-text" active to="#!">
                                Active
                            </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink className="white-text" active to="#!">
                                Active
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                </BrowserRouter>
            </div>
        );
    }
}
