import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

const Navbar = ({}) => {
  const activeUser = localStorage.getItem("activeUser");

  return (
    <BSNavbar bg="light" expand="lg">
      <Container>
        <BSNavbar.Brand href="/">Букирање лета параглајдером</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Почетна</Nav.Link>
            <Nav.Link href="/login">Улогујте се</Nav.Link>
            {activeUser && (
              <Nav.Link href="/flights-history">Историја летова</Nav.Link>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
