import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedMainSwitch from "./components/AnimatedMainSwitch";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
const App = () => (
  <Jumbotron fluid>
    <Container>
      <h1>Fluid jumbotron</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex dolorem facilis. Quidem totam, omnis ad debitis earum nihil aut fugit, aliquam repellendus fuga, accusamus quas modi blanditiis ducimus enim.
      </p>
      <AnimatedMainSwitch />
    </Container>
  </Jumbotron>
);

export default App;
