import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css';
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/bgbvJcL/London.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>The Best Tours</h3>
          <p>Travelling across the world is now much easier and fun.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/2sTbmwJ/Paris.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Top Travelling Destinations</h3>
          <p>Hot offers for the most amazing tours around the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/3mw1xYM/venice-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Prepare For Your Travel</h3>
          <p>
          Expound the actual teachings of the great explorer
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
