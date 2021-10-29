import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link href="#pricing">Tour</Nav.Link>
              <Nav.Link href="#pricing">Gallery</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link as={Link} to='/addDestination'>Add Destinations</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;




