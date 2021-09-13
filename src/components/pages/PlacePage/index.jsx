import RegularLayout from "../../layouts/RegularLayout";
import "./PlacePage.css";
import Image from "react-bootstrap/Image";
import moment from "moment";
import {
  availableParagliders,
  availablePlaces,
} from "../../../data/availableFlights";

import { useParams } from "react-router-dom";
import ProductLayout from "../../layouts/ProductLayout";
import FlightItem from "../../organisms/FlightItem";

const PlacePage = () => {
  let { placeID } = useParams();
  console.log(
    "routerParams",
    placeID,
    "\n\n",
    moment().toString(),
    "\n\n",
    moment("Sep 10 2011 23:53:57").add(8, "days").toString()
  );
  return (
    <div>
      <RegularLayout>
        <ProductLayout>
          {availableParagliders
            .filter((flight) => flight.placeID === Number(placeID))
            .map((flight) => (
              <a href={`/places/${placeID}/flight/${flight.id}`}>
                <FlightItem
                  key={flight.id}
                  title={flight.type}
                  duration={flight.duration}
                  price={flight.price}
                  image={flight.image}
                />
              </a>
            ))}
        </ProductLayout>
      </RegularLayout>
    </div>
  );
};

PlacePage.propTypes = {};

PlacePage.defaultProps = {};

export default PlacePage;
