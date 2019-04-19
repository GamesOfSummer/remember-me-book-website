import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Spacer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. <br />
                    </Col>
                </Row>
            </div>
        );
    }
}
