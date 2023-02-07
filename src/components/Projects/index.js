import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from '../Search';
import './style.css';

export default function Projects() {
    return (
        <Container className="projectsContainer">
            <Row>
                <Search />
            </Row>
            <Row>
                <h4>Projects</h4>
            </Row>
            <br/>
            <Row>
                <p>Codewell</p>
            </Row>
            <Row>
                <p>Spense</p>
            </Row>
        </Container>
    )
}