import React from "react";
import { Col } from "react-bootstrap";
import './BenefitPics.css';
const BenefitPics = () => {
  return (
    <Col>
      <div className='row benefit-pic'>
          <div className="col-md-6">
              <img src="https://i.ibb.co/vvWbSPJ/benefit-1.webp" alt="" />
          </div>
          <div className="col-md-6">
              <img src="https://i.ibb.co/hsXFc2V/benefit-3.webp" alt="" />
          </div>
          <div className="col-md-6 mt-3">
              <img src="https://i.ibb.co/PwyRhpc/benefit-2.webp" alt="" />
          </div>
          <div className="col-md-6 img-4">
              <img src="https://i.ibb.co/KyQgHj7/benefit-4.webp" alt="" />
          </div>
      </div>
    </Col>
  );
};

export default BenefitPics;

/*
https://i.ibb.co/KyQgHj7/benefit-4.webp
https://i.ibb.co/hsXFc2V/benefit-3.webp
https://i.ibb.co/PwyRhpc/benefit-2.webp
https://i.ibb.co/vvWbSPJ/benefit-1.webp*/
