import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div class="navbar-wrapper">
                <div class="navbar navbar-inverse navbar-fixed-top">
                    <div class="navbar-inner">
                        <div class="container">
                            <a
                                class="btn btn-navbar"
                                data-toggle="collapse"
                                data-target=".nav-collapse"
                            >
                                <span class="icon-bar" />
                                <span class="icon-bar" />
                                <span class="icon-bar" />
                            </a>
                            <h1 class="brand">
                                <a href="index.html">Remember Me</a>
                            </h1>

                            <nav class="pull-right nav-collapse collapse">
                                <ul id="menu-main" class="nav">
                                    <li>
                                        <a title="team" href="#about">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a title="services" href="#services">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a title="works" href="#works">
                                            Works
                                        </a>
                                    </li>
                                    <li>
                                        <a title="blog" href="#blog">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a title="contact" href="#contact">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page.html">Page</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
