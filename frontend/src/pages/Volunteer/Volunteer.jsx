import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Volunteer({ volunteer }) {
  const {
    id,
    name,
    contactNumber,
    email,
    imageUrl,
    village_assigned,
    number_of_family_visited,
  } = volunteer;
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/beneficiary/create");
  };

  const handleUpdateClick = () => {
    navigate("/beneficiary/update");
  };

  const handleReadClick = () => {
    navigate("/beneficiary/read");
  };

  const handleDeleteClick = () => {
    navigate("/beneficiary/delete");
  };

  return (
    <div>
      <Navbar bg="success" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">Add a Query</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link>Welcome, {name}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <Row className="mb-3 w-100 justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {id}
                  <br />
                  <strong>Contact Number:</strong> {contactNumber}
                  <br />
                  <strong>Email:</strong> {email}
                  <br />
                  <strong>Village Assigned:</strong> {village_assigned}
                  <br />
                  <strong>Number of Families Visited:</strong>{" "}
                  {number_of_family_visited}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 w-100 justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Button
              variant="success"
              size="lg"
              className="me-2 mb-2"
              onClick={handleCreateClick}
            >
              Create Beneficiary
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="me-2 mb-2"
              onClick={handleReadClick}
            >
              View all Beneficiaries
            </Button>
            <Button
              variant="warning"
              size="lg"
              className="me-2 mb-2"
              onClick={handleUpdateClick}
            >
              Update Beneficiary
            </Button>
            <Button
              variant="danger"
              size="lg"
              className="mb-2"
              onClick={handleDeleteClick}
            >
              Delete Beneficiary
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Volunteer;
