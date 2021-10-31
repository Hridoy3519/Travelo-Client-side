import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import DestinationCard from "../DestinationCard/DestinationCard";

const TourDestinations = () => {
  const [tourDestinations, setTourDestinations] = useState([]);
  useEffect(() => {
    fetch("https://warm-ravine-28341.herokuapp.com/tourDestinations")
      .then((res) => res.json())
      .then((data) => setTourDestinations(data));
  }, []);
  return (
    <Container id="tours" className="services">
      <div className="text-center mt-5">
        <h1 className="text-bold">The Best Tours</h1>
        <div className="d-flex justify-content-center mt-3">
        <div className="underscore"></div>
        </div>
        <p>Hot offers for the most amazing tours around the world</p>
      </div>

      {tourDestinations.length ? (
        <Row xs={1} md={3} className="g-4 my-3">
          {tourDestinations.map((destination) => (
            <DestinationCard
              key={destination._id}
              destination={destination}
            ></DestinationCard>
          ))}
        </Row>
      ) : (
        <div className="loading-animation text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ width: "10rem", height: "10rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  );
};

export default TourDestinations;
