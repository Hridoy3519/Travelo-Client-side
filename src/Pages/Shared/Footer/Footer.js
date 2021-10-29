import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row down">
          <div className="col-md-2">
            
              <h5>Resources</h5>
              <h6>Appointment</h6>
              <h6>Services</h6>
              <h6>Contact Us</h6>
            
          </div>

          <div className="col-md-2">
            <h5>Informations</h5>
            
              <h6>About US</h6>
              <h6>Contact Us</h6>
            
          </div>

          <div className="col-md-2">
            <h5>About Us</h5>
            
              <h6>About US</h6>
              <h6>Contact Us</h6>
            
          </div>
          <div className="col-md-4">
            <p>
              Explore the unknowns with us.
            </p>
          </div>
        </div>

        <div className="copyright">
          <small>
            ©Copyright 2021, Hridoy Chowdhury, Sylhet .All right reserved
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
