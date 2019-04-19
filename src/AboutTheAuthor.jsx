import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

export default class AboutTheAuthor extends Component {
    render() {
        return (
            <div>
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
