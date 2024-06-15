import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Volunteer({ volunteerName }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link disabled>Welcome, {volunteerName}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <Container className="mt-3">
        {/* Card */}
        <Row className="mb-3">
          <Col>
            <Card style={{ width: '18rem' }} className="m-5">
              <Card.Img variant="top" src="src/assets/img.webp" /> {/* Replace with actual image path */}
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Buttons */}
        <Row className="mt-3">
          <Col>
            <Button variant="primary" size="lg" className="me-2">
              Large button 1
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" size="lg" className="me-2">
              Large button 2
            </Button>
          </Col>
          <Col>
            <Button variant="info" size="lg">
              Large button 3
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Volunteer;
