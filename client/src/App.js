import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Header from './Components/Header';
function App() {
  
  return (
    
    <div className="App">
      <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">

     <Header/>
     <div className="row flex-lg-row-reverse align-items-center g-5 py-4 mb-4">
  <div className="col-12 col-lg-6">
    <img src={require("./assets/hero-image.png")} width="607" height="510" className="d-block mx-lg-auto img-fluid" loading="lazy" alt="Cooking With Node.js"/>
  </div>

  <div className="col-12 col-lg-6">
    <h1 className="display-5 fw-bold mb-3">Everyone is waiting for your next big story</h1>
    <p className="lead">
      Explore the stories of the worlds best artists coming from all of over the world. Join us and contribute to the next big thing and immerse in the enchantedness of creativity
    </p>

    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <a href="/explore-latest" className="btn btn-primary btn-dark btn-lg px-4 me-md-2">Explore Latest</a>
      <a href="/explore-random" className="btn btn-outline-secondary btn-lg px-4 me-md-2">Show Random</a>
    </div>

  </div>

</div>
</Container>
    </div>
  );
}

export default App;
