import "./FlightList.css";
import FlightItem from "../../organisms/FlightItem";

const FlightList = ({
  flights,
  align,
  placeID,
  active,
  filterText,
  filterPrice,
  durationText,
}) => {
  return (
    <div className={`flights-container ${align}`}>
      {flights
        .filter((flight) => flight.duration.includes(durationText))
        .filter((flight) => flight.price < filterPrice)
        .filter((flight) =>
          flight.type.toLowerCase().includes(filterText.toLowerCase())
        )
        .filter((flight) => flight.placeID === Number(placeID))
        .map((flight) => (
          <a href={`/places/${placeID}/flight/${flight.id}`}>
            <FlightItem
              align={align}
              key={flight.id}
              title={flight.type}
              duration={flight.duration}
              price={flight.price}
              image={flight.image}
              active={flight.id === active}
            />
          </a>
        ))}
    </div>
  );
};

FlightList.defaultProps = {
  align: "vertical",
  filterText: "",
  filterPrice: 400,
  durationText: "",
};

export default FlightList;
