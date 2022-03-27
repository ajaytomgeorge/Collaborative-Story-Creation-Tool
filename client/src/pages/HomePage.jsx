import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Header from "../Components/Header";
import Introduction from "../Components/Intro";
import Tags from "../Components/Tags";
import Trending from "../Components/Trending";
import JoinNow from "../Components/JoinNow";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export default function Homepage() {
  const [storyMode, setstoryMode] = useState(true);

  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
      <Header />
      {storyMode && (
        <React.Fragment>
          <Introduction />
          <Tags />
          <Trending />
          <JoinNow />
        </React.Fragment>
      )}
    </Container>
  );
}
