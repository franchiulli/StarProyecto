// MainContent.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MainContent() {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <img src="url-de-tu-imagen" alt="Imagen de Portada" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="url-de-tu-imagen" />
            <Card.Body>
              <Card.Title>Noticia 1</Card.Title>
              <Card.Text>
                Descripción breve de la noticia 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="url-de-tu-imagen" />
            <Card.Body>
              <Card.Title>Noticia 2</Card.Title>
              <Card.Text>
                Descripción breve de la noticia 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="url-de-tu-imagen" />
            <Card.Body>
              <Card.Title>Noticia 3</Card.Title>
              <Card.Text>
                Descripción breve de la noticia 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
