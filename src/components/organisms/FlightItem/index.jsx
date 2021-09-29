import "./FlightItem.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { hostName } from "../../../constants/app-constants";
import moment from "moment";

const FlightItem = ({
  image,
  title,
  duration,
  price,
  align,
  active,
  pastTimeOfFlight,
  place,
}) => {
  return (
    <div className="flight-item">
      <Container>
        <Row className={align === "horizontal" && "flight-item-horizontal"}>
          <Col xs={5}>
            <Image
              src={`${hostName}${image}`}
              className={active && "upper-active-col"}
            />
          </Col>
          <Col>
            <div className={`flight-container ${active && "lower-active-col"}`}>
              <div className="flight-title">{title}</div>
              <div className="flight-duration">Трајање лета: {duration}</div>
              {pastTimeOfFlight && (
                <div className="flight-duration">
                  Датум прошлог лета:{" "}
                  {moment(pastTimeOfFlight).format("DD MM YYYY - hh:mm")}
                </div>
              )}
              {place && <div className="flight-duration">Место: {place}</div>}
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
