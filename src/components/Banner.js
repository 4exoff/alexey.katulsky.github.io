/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MainPhoto from "../assets/main.png";
import "../styles/components/banner.scss";

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
              <img src={MainPhoto} alt="Aleksei Katulskii main photo" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Banner;
