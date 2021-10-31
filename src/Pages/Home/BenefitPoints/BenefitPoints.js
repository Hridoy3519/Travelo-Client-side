import React from "react";
import { Col, Row } from "react-bootstrap";
import './BenefitPoints.css';
const BenefitPoints = () => {
  return (
    <Col>
      <div className="benefit-container">
        <div>
          <h1>Our Benefit</h1>
          <div className="underscore ms-2"></div>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
        </div>
        <div className="mt-5">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <h3><i class="far fa-calendar"></i> Personal Schedule</h3>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, making it look like readable
                English.
              </p>
            </Col>
            <Col>
              <h3><i class="fas fa-couch"></i> Luxury Interiors</h3>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, making it look like readable
                English.
              </p>
            </Col>
            <Col>
              <h3><i class="fas fa-bus"></i> Safe & Confidential</h3>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, making it look like readable
                English.
              </p>
            </Col>
            <Col>
              <h3><i class="fas fa-user-tie"></i> Professional Crew</h3>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, making it look like readable
                English.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default BenefitPoints;
