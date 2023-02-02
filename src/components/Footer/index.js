import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.css';

export default function Footer() {

    const copyright = String.fromCodePoint(0x00A9);
    return (
        <Container className="footer">
            <Row className="align-items-end">
                <Col>
                    <p id="jDavidson">Jessica Davidson</p>
                </Col>
                <Col>
                    <p>{`${copyright}`} 2021 Jessica Davidson, ALl Rights Reserved</p>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <span><a href="#">Linkedin</a></span>
                        </Col>
                        <Col>
                            <span><a href="#">Twitter</a></span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}