import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

import Header from "../Components/Header";

export default function SearchResults() {
  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
    <Header />
    <React.Fragment>
        
      <div style={{ marginTop: "50px", marginBottom: "20px" }}>
        <h1>Search Results</h1>
      </div>

      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={require("../assets/card.svg").default}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
    </Container>
  );
}
