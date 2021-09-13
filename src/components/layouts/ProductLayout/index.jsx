import Navbar from "../../organisms/Navbar";
import "./ProductLayout.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterSidePanel from "../../organisms/FilterSidePanel";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <FilterSidePanel />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductLayout;
