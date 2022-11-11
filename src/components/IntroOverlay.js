import React from "react";
import "../styles/components/introOverlay.scss";

const IntroOverlay = () => {
  return (
    <div className="intro-overlay">
      <div className="welcome">
        <span className="welcome__one">Hi</span>
        <span className="welcome__two">I`m Alexey</span>
        <span className="welcome__three">I`m a Front-End Developer</span>
        <span className="welcome__four">Welcome to my Portfolio</span>
      </div>
      <div className="top">
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
      </div>
      <div className="bottom">
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
      </div>
    </div>
  );
};

export default IntroOverlay;
