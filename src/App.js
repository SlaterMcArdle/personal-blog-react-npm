import React from 'react';
import './App.css';
import BlogNavbar from './components/Navbar';
import Categories from './components/Categories';
import Post from './components/Post';
import Announcement from './components/Announcement';
import Newsletter from './components/Newsletter';
import Search from './components/Search';
import Footer from './components/Footer';
import {Container, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <BlogNavbar />
      <Container>
        <Row>
          <Col xs="2">
            <Categories />
          </Col>
          <Col>
            <Post />
            <Announcement />
            <Post />
          </Col>
          <Col xs="3">
            <Search />
          </Col>
        </Row>
      </Container>
      <Container className="newsletterContainer">
        <Row className="newsletterRow">
          <Col xs={{ span: 7, offset: 2}}>
            <Newsletter />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
