import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import './style.css';

export default function Newsletter() {
    return (
        <Container className="newsletter">
            <Row>
                <Col>
                    <h3>Want to stay up to date with my project Codewell?</h3>
                    <p>Receive non-frequent emails about my startup Codewell, you can unsubscribe any time.</p>
                </Col>
                <Col>
                    <img src="https://picsum.photos/300/100" alt="random image" />
                </Col>
            </Row>
        </Container>
    )
}