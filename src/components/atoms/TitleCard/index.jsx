import "./TitleCard.css";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

const TitleCard = ({ children, className, image, imageStyle }) => {
  return (
    <div className={`${className} title-card-container`}>
      <Image src={image} style={imageStyle} className="title-card-image" />
      {children}
    </div>
  );
};
TitleCard.propTypes = {
  children: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  image: PropTypes.string,
  imageStyle: PropTypes.instanceOf(Object),
};

TitleCard.defaultProps = {
  children: null,
  className: "",
  image: "",
  imageStyle: {},
};
export default TitleCard;
