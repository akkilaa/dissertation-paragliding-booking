import Navbar from "../../organisms/Navbar";
import "./ProductLayout.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterSidePanel from "../../organisms/FilterSidePanel";

const ProductLayout = ({
  children,
  className,
  filterText,
  setFilterText,
  filterPrice,
  setFilterPrice,
  durationText,
  setDurationText,
}) => {
  return (
    <div className={className}>
      <Container>
        <Row>
          <Col xs={3} className="filters">
            <FilterSidePanel
              filterText={filterText}
              setFilterText={setFilterText}
              filterPrice={filterPrice}
              setFilterPrice={setFilterPrice}
              durationText={durationText}
              setDurationText={setDurationText}
            />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductLayout;
