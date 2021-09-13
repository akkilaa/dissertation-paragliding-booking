import RegularLayout from "../../layouts/RegularLayout";
import "./FlightPage.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { availablePlaces } from "../../../data/availableFlights";

const FlightPage = () => {
  return (
    <div>
      <RegularLayout>
        Zdravo svete
      </RegularLayout>
    </div>
  );
};

FlightPage.propTypes = {};

FlightPage.defaultProps = {};

export default FlightPage;
