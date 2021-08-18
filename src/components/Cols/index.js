import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Cols = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6">Primeira Coluna</Col>
        <Col xs="6">Segunda Coluna</Col>
      </Row>
    </Container>
  );
}

export default Cols;