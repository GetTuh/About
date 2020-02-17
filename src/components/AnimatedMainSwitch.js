import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { mapStyles, bounceTransition } from "./mainRouterTransition";
import { AnimatedSwitch } from "react-router-transition";
import welcomeScreen from "./welcome/welcomeScreen";

const B = () => <div className="display-1">B</div>;
const C = () => <div className="">C</div>;

export default () => (
  <Router >
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"
    >
      <Route path="/About/" component={welcomeScreen} />
      <Route path="/B" component={B} />
      <Route path="/c" component={C} />
    </AnimatedSwitch>
  </Router>
);
