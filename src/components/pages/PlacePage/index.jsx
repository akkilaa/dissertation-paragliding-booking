import RegularLayout from "../../layouts/RegularLayout";
import "./PlacePage.css";
import {
  availableParagliders,
} from "../../../data/availableFlights";

import { useParams } from "react-router-dom";
import ProductLayout from "../../layouts/ProductLayout";
import FlightList from "../../molecules/FlightList";
import { useEffect, useState } from "react";

const PlacePage = () => {
  let { placeID } = useParams();
  
  const [filterText, setFilterText] = useState("");
  const [filterPrice, setFilterPrice] = useState(400);
  const [durationText, setDurationText] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("availableTrips")) {
      localStorage.setItem(
        "availableTrips",
        JSON.stringify(
          availableParagliders.map((flight) => ({
            id: flight.id,
            placeID: flight.placeID,
            availability: flight.availability,
          }))
        )
      );
    }
  }, []);
  return (
    <div>
      <RegularLayout>
        <ProductLayout
          className="flights"
          filterText={filterText}
          setFilterText={setFilterText}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          durationText={durationText}
          setDurationText={setDurationText}
        >
          <FlightList
            placeID={placeID}
            flights={availableParagliders}
            filterText={filterText}
            filterPrice={filterPrice}
            durationText={durationText}
          />
        </ProductLayout>
      </RegularLayout>
    </div>
  );
};

PlacePage.propTypes = {};

PlacePage.defaultProps = {};

export default PlacePage;
