import React from 'react';
import { Button, ListGroup } from "react-bootstrap";

export default function StoryHeader() {
  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    // console.log(fieldName, fleldVal);
  };
  return (
    <React.Fragment>
      <h2>Your Canvas</h2>
      <ListGroup
        horizontal
        className="col-12 col-md-auto mb-2 mt-0 justify-content-center mb-md-0"
      >
        <ListGroup.Item className="border-0 ">
          <Button className="publish" variant="outline-success" size="lg" onClick={handleChange}>
            Publish
          </Button>
        </ListGroup.Item>
      </ListGroup>

      <div className="col-md-2 text-end">
        Signed in as: <a href="#login">Mark Otto</a>
      </div>
      </React.Fragment>
  );
}
