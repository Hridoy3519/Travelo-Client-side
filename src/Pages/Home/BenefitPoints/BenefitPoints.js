import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BenefitPoints.css";
const BenefitPoints = () => {
  return (
    <Col>
      <div className="benefit-container">
        <div>
          <h1>Our Benefit</h1>
          <div className="underscore ms-2"></div>
          <p>
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
        </div>
        <div className="mt-5">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <h3>
                <i className="far fa-calendar"></i> Personal Schedule
              </h3>
              <p>
                Start Planning you holiday with us, we let you the luxury of
                personalizing your own dates of travel and stay
              </p>
            </Col>
            <Col>
              <h3>
                <i className="fas fa-couch"></i> Luxury Interiors
              </h3>
              <p>
                Almost all of our stay in hotels are 4* to 5* rated. We make
                sure your travelling experience to be as smooth as possible.
              </p>
            </Col>
            <Col>
              <h3>
                <i className="fas fa-bus"></i> Safe & Confidential
              </h3>
              <p>
                We let you forget all the stress and relax. We travel with You,
                so we care for a safe travel as much as you do.
              </p>
            </Col>
            <Col>
              <h3>
                <i className="fas fa-user-tie"></i> Professional Crew
              </h3>
              <p>
                Our Travel Crew and Members are extremely professionals, we know
                what exactly you need. We have experience of conducting 1000's of
                Tour Plans
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default BenefitPoints;
