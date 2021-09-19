import {
  Navbar as BSNavbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";

const Navbar = ({}) => {
  return (
    <BSNavbar bg="light" expand="lg">
      <Container>
        <BSNavbar.Brand href="/">Букирање лета параглајдером</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Почетна</Nav.Link>
            <Nav.Link href="/login">Улогујте се</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
