import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function footer() {
  return (
    <footer className="mt-auto">
      <Container fluid={true}>
        <Row className="border-top justify-content-end p-3">
          {/* <Col className="p-0" md={3} sm={12}>
            Caleb Vautier
          </Col> */}
          <Col className="p-0 d-flex justify-content-end">
            Made by Caleb Vautier
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;
