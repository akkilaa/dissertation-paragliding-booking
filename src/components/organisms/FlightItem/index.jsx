import "./FlightItem.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FlightItem = ({ image, title, duration, price, align, active }) => {
  return (
    <div className="flight-item">
      <Container>
        <Row className={align === "horizontal" && "flight-item-horizontal"}>
          <Col xs={5}>
            <Image src={`http://localhost:5000/${image}`}  className={active && "upper-active-col"} />
          </Col>
          <Col>
            <div className={`flight-container ${active && "lower-active-col"}`}>
              <div className="flight-title">{title}</div>
              <div className="flight-duration">Трајање лета: {duration}</div>
              <div className="flight-price">
                Цена: <span className="flight-price-number">{price}e</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlightItem;
