import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import BookingForm from "./BookingForm/BookingForm";
import "./BookTour.css";
const BookTour = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tourDestinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);
  return (
    <div>
      <Container className="my-4">
        <div className="card destination-detail mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={destination.img}
                className="img-fluid img-detail rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{destination.title}</h5>
                <p className="card-text">{destination.description}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div>
        <BookingForm id={id}></BookingForm>
      </div>
    </div>
  );
};

export default BookTour;
