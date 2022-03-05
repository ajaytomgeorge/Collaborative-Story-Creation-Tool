import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Introduction from "./Components/Intro";
import Tags from "./Components/Tags";
import Trending from "./Components/Trending";
import JoinNow from "./Components/JoinNow";
function App() {
  return (
    <div className="App">
      <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
        <Header />
        <Introduction />
        <Tags/>
        <Trending/>
        <JoinNow/>
        
      </Container>
    </div>
  );
}

export default App;
