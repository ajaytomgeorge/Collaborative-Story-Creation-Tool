import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Components/Header";
import Introduction from "../Components/Intro";
import Tags from "../Components/Tags";
import Trending from "../Components/Trending";
import JoinNow from "../Components/JoinNow";

export default function Homepage() {

  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
      <Header />
      
        <React.Fragment>
          <Introduction />
          <Tags />
          <Trending />
          <JoinNow />
        </React.Fragment>
    </Container>
  );
}
