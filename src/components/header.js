import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Button from 'react-bootstrap/Button'

import About from './about'
import Help from './help'
import {bounceTransition,mapStyles} from '../animations/animatedSwitch'
const Home = ()=>(
  <Router>
    <div className="display-1">HOMEa</div>
  </Router>
)

export default function App() {
  return (
   <Router>
     <p>
       <Link to="/about"><Button variant="primary">About</Button></Link>
     </p>
     <p>
       <Link to="/help"><Button variant="warning">Help</Button></Link>
     </p>
     <p>
       <Link to="/">HOME</Link>
     </p>
     <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"
    >
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/help" component={Help}/>
    </AnimatedSwitch>
   </Router>
  );
}

