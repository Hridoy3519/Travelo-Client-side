import React from "react";
import { Container } from "react-bootstrap";
import './Milestone.css';
const Milestone = () => {
  return (
    <Container className="my-5">
      <div className="row milestone d-flex text-center align-items-center">
        <div className="col-md-4">
          <i class="fas fa-globe-americas"></i>
          <h3>402</h3>
          <p>Tours Done Successfully</p>
        </div>
        <div className="col-md-4">
          <i class="fas fa-globe-americas"></i>
          <h3>65</h3>
          <p>Tours Done Annually</p>
        </div>
        <div className="col-md-4">
          <i class="fas fa-user-check"></i>
          <h3>2370</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </Container>
  );
};

export default Milestone;
