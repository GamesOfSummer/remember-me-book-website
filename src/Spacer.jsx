import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default class Spacer extends Component {
    render() {
        const styles = {
            color: 'blue',
            'background-color': 'coral',
            'font-weight': 'bold',
            height: '1000 px'
        };

        return (
            <div>
                <Row style={styles}>
                    <Col>
                        Oh my gosh <br />
                        Your Mom <br />
                        So gifted <br />
                        So amazing <br />
                        What an immense blessing and legacy she is giving to all
                        those families with her book! I got 1/2 way thru on the
                        plane.... God blessed her with such an awesome soul.
                        -Ali <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. <br />
                    </Col>
                </Row>

                <br />
            </div>
        );
    }
}
