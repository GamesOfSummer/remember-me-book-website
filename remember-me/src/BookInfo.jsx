import React, { Component } from 'react';

import { MDBCol, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class BookInfo extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <MDBTable>
                            <MDBTableHead>
                                <tr>
                                    <th />
                                    <th />
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>Title</td>
                                    <td>
                                        Remember Me A Memoir of Children and
                                        Teens Combating Cancer
                                    </td>
                                </tr>
                                <tr>
                                    <td> Author</td>
                                    <td>Janalee Tomaseski-Heinemann</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>
                                        Memoir Body, Mind, Spirit Religion
                                        Medical
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>
                                        Soft Cover 978-0960085309 $14.95 eBook
                                        $9.99
                                    </td>
                                </tr>
                                <tr>
                                    <td>Availability</td>
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
