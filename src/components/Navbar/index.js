import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import {ReactComponent as Email} from '../../assets/icons/Email.svg';
import './style.css';

export default function BlogNavbar() {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand>
                    <span><a id="logo" href="/">Jessica Davidson</a></span>
                </Navbar.Brand>
                <Navbar.Toggle arie-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center ms-auto">
                    <Nav>
                        <Nav.Link href="/">Writings</Nav.Link>
                        <Nav.Link href="/awards">Awards</Nav.Link>
                        <Nav.Link href="/sponsor">Sponsor</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div class="postForm input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input className="emailInput" type="email" placeholder="john@example.com"/>
                    <button type="submit" className="navPostButton">Create new post</button>
                </div>
            </Container>
        </Navbar>
    )
}