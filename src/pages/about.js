import React from "react";
import Footer from "../components/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import "../styles/pages/about.scss";

const About = () => {
  return (
    <>
      <main className="page">
        <div className="container">
          <div className="row">
            <Fade triggerOnce>
              <h1>About</h1>
            </Fade>
            <section className="about" id="bio">
              <Slide triggerOnce delay={1000} direction="left">
                <h3>Biography:</h3>
              </Slide>
              <Slide triggerOnce delay={1500} direction="up">
                <div className="blur">
                  <p>
                    I started my career path in tech in 2017 when I graduated
                    from Polotsk State University with a degree in Software
                    Engineering. When I was a child, I was interested in drawing
                    and electronics, most likely that was the reason why I chose
                    a direction in Front-End. I was a big fan of seeing the
                    result of my work, optimizing solutions and implementing
                    complex logic.
                  </p>
                </div>
              </Slide>
            </section>

            <section className="about" id="experience">
              <Slide triggerOnce delay={1000} direction="left">
                <h3>Experience:</h3>
              </Slide>
              <Slide triggerOnce delay={1500} direction="up">
                <div className="blur">
                  <p>
                    Over the years of commercial experience, I had the
                    opportunity to work with different development teams, all of
                    them were unique and interesting in their experience and
                    skills. As for the technology stack, like all front-end
                    developers, I started my path with native JS, HTML5, Css3.
                    Later I got acquainted with Jquery, it was a long
                    acquaintance for me, because years later I faced with
                    projects where I had to support it, optimize existing
                    solutions and logic or translate code into new frameworks.
                    As for frameworks, Angular was the first in my portfolio,
                    later I had a chance to get acquainted with Vue, the last
                    and my favorite framework was React. Unlike View, React
                    hooked me with its scalability and universalism. Between
                    breaks in code development, I am interested in new features
                    or life hacks in programming.
                  </p>
                </div>
              </Slide>
            </section>

            <section className="about" id="hobby">
              <Slide triggerOnce delay={1000} direction="left">
                <h3>Hobby:</h3>
              </Slide>
              <Slide triggerOnce delay={1500} direction="up">
                <div className="blur">
                  <p>
                    When I have some free time, I try to spend it energetically
                    and preferably with a change of scenery. In summer I am
                    almost always on the road. In the evenings I can play
                    computer games, watch or read articles on military,
                    automotive, high-tech topics, or once again come up with a
                    strategy for my crypto-trading bot. But what I like the most
                    is cryptocurrency and everything what is connected with it.
                  </p>
                </div>
              </Slide>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
