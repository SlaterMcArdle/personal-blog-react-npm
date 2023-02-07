import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FooterContent from '../FooterContent';
import Newsletter from '../Newsletter';
import './style.css';

export default function Footer() {

    return (
        <Container className="footerContainer">
            <Row className="newsletterRow">
                <Col xs={{ span: 7, offset: 2}}>
                    <Newsletter />
                </Col>
            </Row>
            <Row>
                <FooterContent />
            </Row>
        </Container>
    )
}