import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './DestinationCard.css';

const DestinationCard = (props) => {
  const { title , img, people, days, price, key} = props.destination;
  return (
    <Col>
      <Card className="h-100 destination-card">
        <Card.Img  variant="top" src={img} />
        <Card.Body >
          <Card.Title> {title}</Card.Title>
          <div className="d-flex justify-content-between">
              
              <h6><i class="far fa-calendar"></i> {days} Days</h6>
              <h6><i class="fas fa-users"></i> Max People: {people}</h6>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <h4 className="colored-text">${price}</h4>
          <Link to={`service/${key}`}>
            <button className="customized-btn">Details</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default DestinationCard;
