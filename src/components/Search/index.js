import React from 'react';
import { Container, InputGroup, Form, Button } from 'react-bootstrap';
import './style.css';

export default function Search() {
    return (
        <Container className="search">
            <Form.Control className="search-input" aria-label="Search Posts" placeholder='Search Posts'/>
            <Button variant="outline-secondary" id="button-addon1">⌘S</Button>
        </Container>
        
    )
}
