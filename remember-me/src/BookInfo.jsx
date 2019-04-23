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
                    <MDBCol size="12" md="3" />
                    <MDBCol size="12" md="4">
                        <img src={image} width="400" />
                    </MDBCol>
                    <MDBCol size="6" md="4">
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
                                        Memoir Body, Mind, Spirit Religion
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
                                            <MDBIcon
                                                icon="external-link-alt"
                                                className="cyan-text pr-3"
                                            />
                                            Availability{' '}
                                        </p>
                                    </td>
                                    <td>Amazon.com Kindle BN.com Nook Apple</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
