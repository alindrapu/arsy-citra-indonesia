import "./ourServices.css";
// import { Button, Card, Row, Col } from "react-bootstrap";

const OurServices = () => {
  return (
    <div className="services-container" id="our-services">

      <span>
        <h1>Our Services :</h1>
      </span>
      <div className="cards-container">
        <div className="study-card card">
          <img src="http://localhost:3000/imgs/study.png" />
          <p>study</p>
        </div>
        <div className="planning-card card">
          <img src="http://localhost:3000/imgs/planning.png" />
          <p>planning</p>
        </div>
        <div className="design-card card">
          <img src="http://localhost:3000/imgs/design.png" />
          <p>design</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
