import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import image from './images/headerMain.jpg';
import {
    MDBJumbotron,
    MDBCardTitle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline
} from 'mdbreact';

import './Header.css';

export default class Header extends Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );

        return (
            <div id="apppage">
                <Router>
                    <div>
                        {/*
                        <MDBNavbar
                            color="primary-color"
                            dark
                            expand="md"
                            fixed="top"
                            scrolling
                            transparent
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className="white-text">MDB</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler
                                    onClick={this.handleTogglerClick}
                                />
                                <MDBCollapse
                                    isOpen={this.state.collapsed}
                                    navbar
                                >
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#!">
                                                Home
                                            </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">
                                                Link
                                            </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">
                                                Profile
                                            </MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBFormInline waves>
                                                <div className="md-form my-0">
                                                    <input
                                                        className="form-control mr-sm-2"
                                                        type="text"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                    />
                                                </div>
                                            </MDBFormInline>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        */}
                        {this.state.collapsed && overlay}
                    </div>
                </Router>
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
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
                                        Buy on Amazon
                                    </MDBBtn>
                                    <MDBBtn gradient="winter-neva">
                                        Buy on Barnes ahd Noble
                                    </MDBBtn>
                                </div>
                                <MDBCol md="6" xl="5" className="mt-xl-5" />
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <p />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                {/*
                <MDBJumbotron style={{ padding: 0, height: '100vh' }}>
                    <MDBCol
                        className="text-white text-center "
                        style={{
                            background:
                                'url(' + image + ') fixed center no-repeat',
                            backgroundSize: 'cover'
                            // opacity: '0.1'
                        }}
                    >
                        <MDBCol className="py-5">
                            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold blue-text">
                                Remember Me
                            </MDBCardTitle>
                            <p className="mx-5 mb-5 blue-text">
                                {' '}
                                Heart-warming, eye opening book promises to
                                change the way you see life, death, and cancer
                                through the touching true stories, words, and
                                sometimes death of precious children in
                                treatment
                            </p>

                            <MDBBtn gradient="winter-neva">
                                Buy on Amazon
                            </MDBBtn>
                            <MDBBtn gradient="winter-neva">
                                Buy on Barnes ahd Noble
                            </MDBBtn>
                        </MDBCol>
                    </MDBCol>
                </MDBJumbotron>
                    */}
            </div>
        );
    }
}
