import "./FlightItem.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FlightItem = ({ image, title, duration, price }) => {
  return (
    <div className="flight-item">
      <Container>
        <Row>
          <Col xs={5}>
            <Image src={`http://localhost:5000/${image}`} />
          </Col>
          <Col>
            <div className="flight-container">
              <div>{title}</div>
              <div>Време трајања лета: {duration}</div>
              <div>Цена: {price}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlightItem;
