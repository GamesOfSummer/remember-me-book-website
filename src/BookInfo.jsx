import React, { Component } from 'react';

import {
    MDBCol,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBIcon
} from 'mdbreact';
import image from './images/BookCover.PNG';

export default class BookInfo extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="3" />
                    <MDBCol md="3">
                        <img
                            src={image}
                            className="float-right"
                            width="100%"
                            height="auto"
                            alt=""
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBTable>
                            <MDBTableHead>
                                <tr>
                                    <th />
                                    <th />
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <p>
                                            <MDBIcon
                                                icon="bookmark"
                                                className="cyan-text pr-3"
                                            />
                                            Title{' '}
                                        </p>
                                    </td>
                                    <td>
                                        Remember Me A Memoir of Children and
                                        Teens Combating Cancer
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <MDBIcon
                                                icon="address-book"
                                                className="cyan-text pr-3"
                                            />
                                            Publlisher{' '}
                                        </p>
                                    </td>
                                    <td>Adam's Angels Publishing LLC </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <MDBIcon
                                                icon="user"
                                                className="cyan-text pr-3"
                                            />
                                            Author{' '}
                                        </p>
                                    </td>
                                    <td>Janalee Tomaseski-Heinemann</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <MDBIcon
                                                icon="list"
                                                className="cyan-text pr-3"
                                            />
                                            Category{' '}
                                        </p>
                                    </td>
                                    <td>
                                        Memoir, Body, Mind, Spirit, Religion,
                                        Medical
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <MDBIcon
                                                icon="dollar-sign"
                                                className="cyan-text pr-3"
                                            />
                                            Price{' '}
                                        </p>
                                    </td>
                                    <td>
                                        Soft Cover $14.95 ( 978-0960085309 )
                                        <br /> eBook $9.99
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>
                                            <a href="https://www.amazon.com/Remember-Me-Memoir-Children-Combating/dp/0960085300/">
                                                <MDBIcon
                                                    icon="external-link-alt"
                                                    className="cyan-text pr-3"
                                                />
                                                <b>Amazon </b>{' '}
                                            </a>
                                            <br />
                                            <a href="https://www.amazon.com/Remember-Me-Memoir-Children-Combating-ebook/dp/B07PFYN1KV/">
                                                <MDBIcon
                                                    icon="external-link-alt"
                                                    className="cyan-text pr-3"
                                                />
                                                <b>Kindle </b>{' '}
                                            </a>
                                            <br />

                                            <a href="https://www.barnesandnoble.com/w/remember-me-janalee-tomaseski-heinemann-msw/1131142845?ean=2940161321973">
                                                <MDBIcon
                                                    icon="external-link-alt"
                                                    className="cyan-text pr-3"
                                                />
                                                <b>Nook</b>{' '}
                                            </a>

                                            <br />

                                            <a href="https://books.apple.com/us/book/remember-me/id1458746308?mt=11&app=itunes">
                                                <MDBIcon
                                                    icon="external-link-alt"
                                                    className="cyan-text pr-3"
                                                />
                                                <b>Apple Books</b>{' '}
                                            </a>

                                            <br />
                                        </p>
                                    </td>
                                    <td />
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                    <MDBCol md="3" />
                </MDBRow>

                <p />
            </div>
        );
    }
}
