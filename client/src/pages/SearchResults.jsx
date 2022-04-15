import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


import Header from "../Components/Header";

const SearchResults = ({user}) => {
  const [results, setResults] = useState([]);
  const { searchString } = useParams();
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/renpmad/${id}`);
  };

  useEffect(() => {
    if (!user.auth){
      navigate("/login")
    }
    fetch(`/story/search/${searchString}`)
      .then((res) => {
        console.log("response is ", res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setResults(data);
      })
      .catch((error) => {
        console.log("error occured in search results", error);
      });
  }, [searchString]);

  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
      <Header />
      <React.Fragment>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <h1>Search Results</h1>
        </div>

        <Row xs={1} md={3} className="g-4">
          {results.map((result, idx) => (
            // eslint-disable-next-line react/jsx-key
            <Col key={idx}>
              <Card
                style={{ borderRadius: "10px", cursor: "pointer" }}
                onClick={() => onClick(result._id)}
              >
                <Card.Img
                  variant="top"
                  src={`https://picsum.photos/321/160?random=${idx}`}
                />
                <Card.Body>
                  <Card.Title>
                    {result.title ? result.title: "Lorem Epsum" } ❤️{result.likes}
                  </Card.Title>
                  <Card.Text>
                    <div style={{ fontSize: "14px", fontWeight: "100" }}>
                      {result.text
                        ? result.text
                        : "This was  a test insertion. Fed to the database during testing. Available in the databse, but content is empty or null"}{" "}
                      <br />
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      {result.createdAt} <br />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    </Container>
  );
};

SearchResults.defaultProps = {
  user: {},
};

SearchResults.propTypes = {
  user: PropTypes.object,
};

export default SearchResults;
