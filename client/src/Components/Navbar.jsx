import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("../assets/logo.svg").default}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Chronicles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#writing">Start Writing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#signup">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
