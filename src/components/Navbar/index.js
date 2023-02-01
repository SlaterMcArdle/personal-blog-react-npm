import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import './style.css';

export default function BlogNavbar() {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand>
                    <span><a href="/">Jessica Davidson</a></span>
                </Navbar.Brand>
                <Navbar.Toggle arie-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ms-auto">
                    <Nav>
                        <Nav.Link href="/">Writings</Nav.Link>
                        <Nav.Link href="/awards">Awards</Nav.Link>
                        <Nav.Link href="/sponsor">Sponsor</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Group controlId="emailForm">
                            <Form.Control type="email" placeholder="john@example.com" className="bg-secondary text-dark"></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Create new post</Button>
                    </Form> */}
                    <form>
                        <input type="email" placeholder="john@example.com"/>
                        <Button id="navPostButton" type="submit" className="bg-dark">Create new post</Button>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}