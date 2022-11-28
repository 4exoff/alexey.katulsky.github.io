import React from 'react';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { Fade } from 'react-awesome-reveal';
import { about } from '../data/aboutSections';

const About = () => {
  return (
    <>
      <main className='page'>
        <div className='container'>
          <div className='row'>
            <Fade triggerOnce>
              <h1>About</h1>
            </Fade>

            {about &&
              about.map((el) => <AboutSection key={el.id} about={el} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
