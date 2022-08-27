import React from "react";
import { Col, Row } from "react-bootstrap";
import logoBlack from "../../assets/img/logoBlack.png";
import "./description.css";

const Description = () => {
  return (
    <Row id="about-us">
      <Col>
        <img src={logoBlack} alt="desc-logo" />
      </Col>
      <Col>
        <p>
          Arsy Citra Indonesia is a consulting service company that has been
          established since 2017 in the city of Bandung, West Java. The services
          of this company focus on consulting services for feasibility studies,
          regional planning and urban design. <br />
          <br />
          Since our establishment until now, we always grow and move to provide
          the best service for our clients and partners. our clients range from
          government at the central, provincial and regional levels to private
          companies.
        </p>
      </Col>
    </Row>
  );
};

export default Description;
