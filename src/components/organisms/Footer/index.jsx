import "./Footer.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { users } from "../../../data/users";

const Footer = () => {
  const loggedUser = localStorage.getItem("activeUser");
  let activeUser = {};
  if (loggedUser) {
    activeUser = users.find((user) => user.id === Number(loggedUser));
  }
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col className="footer-logged-in-as">
            {activeUser.username
              ? `Улогован као: ${activeUser.username}`
              : `Нисте улоговани.`}
          </Col>
          <Col>
            <div className="footer-white-text">Ⓒ All right reserved 2021</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
