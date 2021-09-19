import RegularLayout from "../../layouts/RegularLayout";
import "./FlightPage.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import {
  availableParagliders,
  availablePlaces,
} from "../../../data/availableFlights";
import { getRandomInt } from "../../../utils/data-utils";
import { useParams } from "react-router-dom";
import moment from "moment";
import TitleCard from "../../atoms/TitleCard";
import { hostName } from "../../../constants/app-constants";
import FlightList from "../../molecules/FlightList";

const FlightPage = () => {
  let { flightID } = useParams();
  flightID = Number(flightID);
  console.log("flightID", flightID);
  const currentFlight =
    availableParagliders.find(
      (availableParaglider) => availableParaglider.id === flightID
    ) || {};
  const currentFlightPlace = availablePlaces.find(
    (place) => place.id === currentFlight.placeID
  );
  const imageIconStyle = {
    width: 35,
    height: 35,
    objectFit: "contain",
  };
  const bigImageIconStyle = {
    width: 60,
    height: 60,
    objectFit: "contain",
  };
  return (
    <div className="flight-page">
      <RegularLayout>
        <div className="flight-hero-image-container">
          <Image
            src={`${hostName}/images/flight-covers/flight-${getRandomInt(
              3
            )}.jpg`}
            fluid
          />
        </div>
        <Container style={{ minHeight: 350 }}>
          <div className="flight-place-title">{`${currentFlight.type} - ${currentFlightPlace.title}`}</div>
          <Row>
            <Col className="left-col">
              <div className="flight-section-title">Основни подаци:</div>
              <TitleCard
                imageStyle={imageIconStyle}
                image={`${hostName}images/icons/duration.png`}
              >
                <span>{currentFlight.duration}</span>
              </TitleCard>
              <TitleCard
                imageStyle={imageIconStyle}
                image={`${hostName}images/icons/clock.png`}
              >
                <span>
                  {moment(currentFlight.time, "DD YYYY hh:mm:ss").format("LLL")}
                </span>
              </TitleCard>
              <TitleCard
                imageStyle={imageIconStyle}
                image={`${hostName}images/icons/location.png`}
              >
                <span>{currentFlightPlace.title}</span>
              </TitleCard>
            </Col>
            <Col>
              <div className="flight-section-title">Детаљи:</div>
              <div className="flight-section-data">
                <TitleCard
                  imageStyle={bigImageIconStyle}
                  image={`${hostName}images/icons/available.png`}
                >
                  <span>{currentFlight.availabilty}</span>
                </TitleCard>
                <TitleCard
                  imageStyle={bigImageIconStyle}
                  image={`${hostName}images/icons/euro.png`}
                >
                  <span>{currentFlight.price}e</span>
                </TitleCard>
              </div>
              <div className="flight-reserve-button-wrapper">
                <Button>Резервиши Лет</Button>
              </div>
            </Col>
          </Row>
          <div className="flight-section-title">Слични летови:</div>
          <Row>
            <FlightList
              flights={availableParagliders}
              align="horizontal"
              placeID={currentFlightPlace.id}
              active={flightID}
            />
          </Row>
        </Container>
      </RegularLayout>
    </div>
  );
};

FlightPage.propTypes = {};

FlightPage.defaultProps = {};

export default FlightPage;
