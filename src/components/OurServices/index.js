import "./ourServices.css";
import { Button, Card, Row, Col } from "react-bootstrap";

const OurServices = () => {
  return (
    <Col>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Col>
    // <div className="services-container" id="our-services">

    //   <span>
    //     <h1>Our Services :</h1>
    //   </span>
    //   <div className="cards-container">
    //     <div className="study-card card">
    //       <img src="http://localhost:3000/imgs/study.png" />
    //       <p>study</p>
    //     </div>
    //     <div className="planning-card card">
    //       <img src="http://localhost:3000/imgs/planning.png" />
    //       <p>planning</p>
    //     </div>
    //     <div className="design-card card">
    //       <img src="http://localhost:3000/imgs/design.png" />
    //       <p>design</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OurServices;
