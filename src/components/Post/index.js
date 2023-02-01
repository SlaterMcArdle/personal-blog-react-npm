import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.css';

export default function Post() {
    return (
        <Container className="post">
            <Row>
                <Col>
                    <h3>Understanding the reasons behind a successful startup</h3>
                    <p>Going over the reasons why most successful startups  should understand the basics of business instead of just launching into the void without any market study.</p>
                </Col>
                <Col>
                    <img src="/post-image.png" alt="random image" />
                </Col>
            </Row>
        </Container>
    )
}