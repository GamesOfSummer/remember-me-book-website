import React, { Component } from 'react';
import { Media, Row, Col } from 'react-bootstrap';
import image from './images/AuthorHeadshot.jpg';

export default class AboutTheAuthor extends Component {
    render() {
        return (
            <div>
                <Row />
                <Col>
                    {' '}
                    <h5>About the Author</h5>
                </Col>
                <Row>
                    <Col>
                        <img
                            width={300}
                            height={300}
                            className="mr-3"
                            src={image}
                            alt="Generic placeholder"
                        />
                    </Col>
                    <Col>
                        <Media>
                            <Media.Body>
                                <h5 class="text-left">Media Heading</h5>
                                <p class="text-left">
                                    Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis. Fusce condimentum nunc ac nisi
                                    vulputate fringilla. Donec lacinia congue
                                    felis in faucibus.
                                </p>
                            </Media.Body>
                        </Media>
                        ;
                    </Col>
                </Row>

                <div class="page-header">
                    <h1>
                        About the Author
                        <small>Subtext for header</small>
                    </h1>
                </div>
                <p>
                    This is a sample text.This is a sample text.This is a sample
                    text. This is a sample text.
                </p>
            </div>
        );
    }
}
