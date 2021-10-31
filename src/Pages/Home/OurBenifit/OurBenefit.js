import React from "react";
import { Container, Row } from "react-bootstrap";
import BenefitPics from "../BenefitPic/BenefitPics";
import BenefitPoints from "../BenefitPoints/BenefitPoints";

const OurBenefit = () => {
  return (
    <Container id="features" className="my-5">
      <Row xs={1} md={2} className="g-4">
         <BenefitPoints></BenefitPoints>
         <BenefitPics></BenefitPics>
      </Row>
    </Container>
  );
};

export default OurBenefit;
