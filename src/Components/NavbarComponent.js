import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Berita</Nav.Link>
            <Nav.Link href="#link">Live Scores</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Piala & Liga
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Transfer Pemain</Nav.Link>
            <Nav.Link href="#link">Tim</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
