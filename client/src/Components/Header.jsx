import {Container, Form, ListGroup, Nav} from 'react-bootstrap';

export default function Header() {

    const handleChange = event =>{
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    console.log(fleldVal);
  };
  return (
      <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
        <Nav.Link
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            src={require("../assets/logo.svg").default}
            width="229"
            height="68"
            alt="Story Teller"
          />
        </Nav.Link>
        <ListGroup
          horizontal
          className="col-12 col-md-auto mb-2 justify-content-center mb-md-0"
        >
          <ListGroup.Item className="border-0">
            <Nav.Link href="/" className="px-2 link-secondary">
              Home
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Nav.Link href="/about" className="px-2 link-secondary">
              About
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Nav.Link href="/submit-recipe" className="px-2 link-secondary">
              Submit
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Nav.Link href="/contact" className="px-2 link-secondary">
              Contact
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>

        <Form className="col-md-3 text-end">
          <Form.Control
            onChange={handleChange}
            type="search"
            name="searchTerm"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </Form>
      </Container>
  );
}
