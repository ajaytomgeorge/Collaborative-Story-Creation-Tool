import { Container, Button, Form, ListGroup, Nav } from "react-bootstrap";

export default function StoryHeader() {
  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    console.log(fleldVal);
  };
  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-0 border-bottom ">
      <h2>Your Canvas</h2>
      <ListGroup
        horizontal
        className="col-12 col-md-auto mb-2 mt-0 justify-content-center mb-md-0"
      >
        <ListGroup.Item className="border-0 ">
          <Button className="publish" variant="outline-success" size="lg">
            Publish
          </Button>
        </ListGroup.Item>
      </ListGroup>

      <div className="col-md-3 text-end">
        Signed in as: <a href="#login">Mark Otto</a>
      </div>
    </Container>
  );
}
