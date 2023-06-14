import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">Pie de Página</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;