import RegularLayout from "../../layouts/RegularLayout";
import "./FlightHistoryPage.css";
import Container from "react-bootstrap/Container";
import { availableParagliders, availablePlaces } from "../../../data/availableFlights";

import FlightItem from "../../organisms/FlightItem";

const FlightHistoryPage = () => {
  const historyFlights = JSON.parse(localStorage.getItem("flightsHistory"));
  let allHistoryFlightsInformation = [];

  if (historyFlights) {
    allHistoryFlightsInformation = historyFlights.map((flight) => ({
      ...availableParagliders.find((availableP) => flight.id === availableP.id),
      place: {
        ...availablePlaces.find((availbP) => availbP.id === flight.placeID),
      },
      checkoutTime: flight.checkoutTime,
    }));
  }
  return (
    <div>
      <RegularLayout>
        <Container>
          <h2 className="history-flights-title">Историја летова</h2>
     

          {!allHistoryFlightsInformation ||
          allHistoryFlightsInformation.length === 0 ? (
            <div>Нема летова</div>
          ) : (
            allHistoryFlightsInformation.map((flight) => (
              <FlightItem
                align="vertical"
                key={flight.id}
                title={flight.type}
                duration={flight.duration}
                price={flight.price}
                image={flight.image}
                pastTimeOfFlight={flight.checkoutTime}
                place={`${flight.place.country} - ${flight.place.title}`}
              />
            ))
          )}
        </Container>
      </RegularLayout>
    </div>
  );
};

FlightHistoryPage.propTypes = {};

FlightHistoryPage.defaultProps = {};

export default FlightHistoryPage;
