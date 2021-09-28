import RegularLayout from "../../layouts/RegularLayout";
import "./HomePage.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import {
  availablePlaces,
  availableParagliders,
} from "../../../data/availableFlights";
import { useEffect } from "react";

const HomePage = () => {
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
        <div className="hero-image-container">
          <Image src="images/hero-min.jpg" fluid />
        </div>
        <Container>
          <div className="places-content">
            {availablePlaces.map((place) => (
              <a href={`/places/${place.id}`} key={place.id}>
                <div className="place-container">
                  <Image src={place.image} height={223} width={178} />
                  <div className="title">{place.title}</div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </RegularLayout>
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
