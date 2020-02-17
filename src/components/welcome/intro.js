import React from "react";
import Anime from "react-anime";
import { Link } from "react-router-dom";

export default () => (
  <Anime
    translateY="17rem"
    delay={(el, index) => 0}
    scale={[0.75, 0.9]}
    duration="1000"
  >
    <div id="intro-text" className="display-1 text-center">
      <Link to="/b">Witam</Link>
    </div>
  </Anime>
);
