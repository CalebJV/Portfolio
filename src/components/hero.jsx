import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0 mt-5">
      <Container fluid="lg">
        <Row className="justify-content-start pt-5">
          <Col className="c-hero" md={8} sm={12}>
            {props.title && (
              <h1 className="display-2 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-5 font-weight-light">{props.subTitle}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default hero;
