import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ReactComponent as Illustration} from '../../assets/Illustration.svg';
import './style.css';

export default function Announcement() {
    return (
        <Container className="announcement">
            <Row>
                <Col>
                    <h3>Announcing a new platform, Codewell.</h3>
                    <p>Codewell is a platform that helps you improve your frontend skills by practicing on real world design templates.</p>
                </Col>
                <Col>
                    <Illustration />
                </Col>
            </Row>
        </Container>
    )
}