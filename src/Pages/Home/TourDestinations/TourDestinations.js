import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DestinationCard from "../DestinationCard/DestinationCard";

const TourDestinations = () => {
  const [tourDestinations, setTourDestinations] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Hridoy3519/travel-site-data/main/tour-destination.json"
    )
      .then((res) => res.json())
      .then((data) => setTourDestinations(data));
  }, []);
  return (
    <Container className="services">
      <div className="text-center mt-5">
        <h1 className="text-bold">The Best Tours</h1>
        <p>Hot offers for the most amazing tours around the world</p>
      </div>

      <Row xs={1} md={3} className="g-4 mt-2">
        {tourDestinations.map((destination) => (
          <DestinationCard
            key={destination.key}
            destination={destination}
          ></DestinationCard>
        ))}
      </Row>
    </Container>
  );
};

export default TourDestinations;
