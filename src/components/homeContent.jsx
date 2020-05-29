import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import homeImage from '../assets/images/homePic1.jpg';

function HomeContent() {
  return (
    <Container fluid="lg">
      <Row className="justify-content-between">
        <Col className="c-content" md={5} sm={12}>
          <p>
            I am a Kiwi Front End Web Developer. I'm still relatively fresh to
            the industry buy I am eager to expand my repertoire and write some
            code!
          </p>
          <Link to="/projects">View my work</Link>
        </Col>
        <Col className="lift-image" md={5} sm={12}>
          <img className="img-fluid" src={homeImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContent;
