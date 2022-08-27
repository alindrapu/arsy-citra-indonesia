import "./ourServices.css";
import { Button, Card, Row, Col } from "react-bootstrap";

const OurServices = () => {
  return (
    <Row id="our-services">
      <span>
        <h1>Our Services :</h1>
      </span>
      <Col className="cards-container">
        <Card className="text-white">
          <Card.Img src="http://localhost:3000/imgs/design.png" alt="design" />
          <Card.ImgOverlay>
            <Card.Title>design</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white">
          <Card.Img src="http://localhost:3000/imgs/design.png" alt="design" />
          <Card.ImgOverlay>
            <Card.Title>design</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white">
          <Card.Img src="http://localhost:3000/imgs/design.png" alt="design" />
          <Card.ImgOverlay>
            <Card.Title>design</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
};

export default OurServices;
