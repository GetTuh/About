import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {mapStyles, bounceTransition} from '../animations/mainRouterTransition'
import { AnimatedSwitch } from 'react-router-transition';


const A = ()=>(
  <div className="display-1"><Link to='B'>A</Link></div>
)
const B = ()=>(
  <div className="display-1">B</div>
)
const C = ()=>(
  <div className="display-1">Cs</div>
)

export default()=>(
<Router>
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
    <Route exact path="/" component={A} />
    <Route path="/b" component={B} />
    <Route path="/c" component={C} />
  </AnimatedSwitch>
  </Router>
  )
