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
        <p>We are a small, tight-knit team focused on making Story Factory empowering and easy to use. A more valuable way where customers are earned rather than bought. We have worked hard to build a company where we do big things. 
          We are here to help you do the same. We are obsessively passionate about it, and our mission is to help people achieve it. </p>
      </div>
      <br></br>
<div className="details">
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={require("../assets/ajay.jpg")} alt="Jane" style={{width:"100%", borderRadius: "60px"}} />
            <div className="container">
              <p> </p>
              <h2>Ajay Tom George</h2>
              <p className="title">CEO & Founder</p>
              <p>ajaytomgeorge@protonmail.com</p>
              <p>Maynooth, IE</p>
              <p>
                <button className="button">Contact</button>
              </p>
              <br></br>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={require("../assets/dennis.jpg")}  alt="Mike" style={{ width: '100%', borderRadius: "60px"}} />
            <div className="container">
              <br></br>
              <h2>Dennis Thomas</h2>
              <p className="title">Operations Director</p>
              <p>dennisthomas715@gmail.com</p>
              <p>Maynooth, IE</p>
              <p>
                <button className="button">Contact</button>
              </p>
              <br></br>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={require("../assets/harsha.jpg")}  alt="John" style={{width:"100%", borderRadius: "60px"}} />
            <div className="container">
              <p> </p>
              <h2>Harsha Teja</h2>
              <p className="title">Chief Marketing Officer</p>
              <p>harsha.nageshwaran@mumail.com</p>
              <p>Maynooth, IE</p>
              <p>
                <button className="button">Contact</button>
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
}
