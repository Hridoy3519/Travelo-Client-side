import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Dashboard from "./Dashboard/Dashboard";
import "./Header.css";
const Header = () => {
  const {user,logOut} = useAuth();
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
              {user.email && <Dashboard></Dashboard>}
            </Nav>
            <Nav>
              {
                user.email ? ( 
                <div className="d-flex align-items-center justify-content-between"> 
                  <h5 className="colored-text me-3"><i className="far fa-user"></i> {user.displayName} </h5> 
                  <button onClick={logOut} className="customized-btn">Logout</button>
                </div> )
                : (<Nav.Link className="customized-btn" as={Link} to='/login'>Login</Nav.Link>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

/*
              {user.email && <Nav.Link as={Link} to='/addDestination'>Add Destinations</Nav.Link>}
              {user.email && <Nav.Link as={Link} to='/myBookings'>My Bookings</Nav.Link>}
              {user.email && <Nav.Link as={Link} to='/manageBookings'>Manage Bookings</Nav.Link>}*/




