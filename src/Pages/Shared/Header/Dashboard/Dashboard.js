import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = useAuth();
  return (
    <>
      <Button className="dashboard-btn" onClick={handleShow}>
        <i className="fas fa-user-shield"></i> Dashboard
      </Button>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="dashboard-body">
            <Nav>
              {user.email && (
                <Nav.Link as={Link} to="/addDestination">
                  Add Destinations
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} to="/myBookings">
                  My Bookings
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} to="/manageBookings">
                  Manage Bookings
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Dashboard;
