import React from 'react';
import Footer from '../components/Footer';
import Company from '../components/Company';
import { Fade } from 'react-awesome-reveal';
import { companies } from '../data/companies';

const Work = () => {
  return (
    <>
      <main className='page'>
        <div className='container'>
          <div className='row'>
            <Fade triggerOnce>
              <h1>Work Experience</h1>
            </Fade>
            <Company companies={companies} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Work;
