import React from 'react';
import {Container, Row, Col, Collapse} from 'react-bootstrap';
import {ReactComponent as Briefcase} from '../../assets/icons/Briefcase.svg';
import {ReactComponent as Palette} from '../../assets/icons/Palette.svg';
import {ReactComponent as Floppy_Disk} from '../../assets/icons/Floppy_Disk.svg';
import {ReactComponent as Behance} from '../../assets/icons/Behance.svg';
import {ReactComponent as Github} from '../../assets/icons/Github.svg';
import {ReactComponent as LinkedIn} from '../../assets/icons/LinkedIn.svg';
import {ReactComponent as New_Window} from '../../assets/icons/New_Window.svg';
import './style.css';

export default function Categories() {
    return (
        <Container className="categories">
            <Row>
                <Col xs={2}><Briefcase className="icon"/></Col>
                <Col>SaaS</Col>
            </Row>
            <Row>
                <Col xs={2}><Palette className="icon"/></Col>
                <Col>Design</Col>
            </Row>
            <Row>
                <Col xs={2}><Floppy_Disk className="icon"/></Col>
                <Col>Development</Col>
            </Row>
            <hr/>
            <Row>
                <Col xs={2}><Behance className="icon"/></Col>
                <Col>Behance</Col>
                <Col xs={1}><New_Window /></Col>
            </Row>
            <Row>
                <Col xs={2}><Github className="icon"/></Col>
                <Col>Github</Col>
                <Col xs={1}><New_Window /></Col>
            </Row>
            <Row>
                <Col xs={2}><LinkedIn className="icon"/></Col>
                <Col>LinkedIn</Col>
                <Col xs={1}><New_Window /></Col>
            </Row>
        </Container>
    )
}
