import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import Header from "../Components/Header";
import Introduction from "../Components/Intro";
import Tags from "../Components/Tags";
import Trending from "../Components/Trending";
import JoinNow from "../Components/JoinNow";

import { UserContext } from "../Components/UserContext";

export default function Homepage() {
  const { user } = useContext(UserContext);

  function unAuthenticated() {
    return (
      <React.Fragment>
        <Introduction />
        <Trending />
        <Tags />
        <JoinNow />
      </React.Fragment>
    );
  }

  function authencticated(){
    return (
      <React.Fragment>
        <JoinNow />
        <Trending />
        <Tags />
      </React.Fragment>
    );
  }

  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
      <Header />
      {user.auth ?  authencticated(): unAuthenticated()}
    </Container>
  );
}
