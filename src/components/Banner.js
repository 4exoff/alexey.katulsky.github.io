import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

import MainPhoto from "../assets/main.png";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row-banner">
          <h2>
            <Fade triggerOnce delay={1000}>
              <div className="line">
                <span>Alexey Katulsky</span>
              </div>
            </Fade>
            <Slide triggerOnce delay={1500} direction="left">
              <div className="line">
                <span>Front-End React Developer</span>
              </div>
            </Slide>
          </h2>
          <Fade triggerOnce delay={1000}>
            <div className="photo">
              <img alt="Aleksei Katulskii main photo" src={MainPhoto} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Banner;
