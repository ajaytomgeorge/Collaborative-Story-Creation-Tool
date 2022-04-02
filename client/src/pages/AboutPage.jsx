import { Container } from "react-bootstrap";
import Header from "../Components/Header";

import "../css/AboutPage.css"

//test
export default function AboutPage() {
  return (
    <Container classNameName="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
      <Header />
      <div className="about-section">
        <h1>About Us </h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
<div className="details">
      <h2 style={{textAlign:"center"}}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={require("../assets/team2.jpg")} alt="Jane" style={{width:"100%"}} />
            <div className="container">
              <h2>Ajay Tom George</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>ajaytomgeorge@protonmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={require("../assets/team2.jpg")}  alt="Mike" style={{ width: '100%'}} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={require("../assets/team2.jpg")}  alt="John" style={{width:"100%"}} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
}
