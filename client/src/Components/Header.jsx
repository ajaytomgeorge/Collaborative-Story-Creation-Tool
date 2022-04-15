import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, ListGroup, Nav } from "react-bootstrap";
import { UserContext } from '../Components/UserContext';


export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user, logout } = useContext(UserContext);


  const onFormSubmit = e => {
    e.preventDefault();

    navigate(`/search/${search}`)
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-0 border-bottom ">
      <Nav.Link
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <div style={{ marginTop: "15px", fontSize: "25px" }}>
          <p>Story Factory</p>
        </div>
      </Nav.Link>
      <ListGroup
        horizontal
        className="col-12 col-md-auto mb-2 mt-0 justify-content-center mb-md-0"
      >
        <ListGroup.Item className="border-0 ">
          <Nav.Link onClick={()=>{navigate("/")}} className="px-2  link-secondary">
            Home
          </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Nav.Link onClick={()=>{navigate("/about")}} className="px-2 link-secondary">
            About
          </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Nav.Link onClick={()=>{navigate("/publish")}} className="px-2 link-secondary">
            Publish
          </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Nav.Link onClick={()=>{user.auth?logout():navigate("/login")}} className="px-2 link-secondary">
            {user.auth? "Logout": "Login"}
          </Nav.Link>
          
        </ListGroup.Item>
      </ListGroup>

      <Form className="col-md-3 text-end" onSubmit={onFormSubmit}>
        <Form.Control
          onChange={handleChange}
          value={search}
          type="search"
          name="searchTerm"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          autoFocus
        />
      </Form>
      <Nav.Link onClick={()=>{navigate("/logs")}}>
      {user.name}
          </Nav.Link>
    </Container>
  );
}
