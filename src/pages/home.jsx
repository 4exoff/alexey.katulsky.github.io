import React, { useEffect, useState } from 'react';
import IntroOverlay from '../components/IntroOverlay';
import Banner from '../components/Banner';
import Cases from '../components/Cases';

import { homeAnimation } from '../animations/homeAnimations';

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  let complete = sessionStorage.getItem('home_animation');

  useEffect(() => {
    if (!complete) {
      sessionStorage.setItem('home_animation', true);
      homeAnimation(completeAnimation);
    }
  }, [complete]);

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [dimensions.height, dimensions.width]);

  return (
    <>
      {!complete && !animationComplete ? <IntroOverlay /> : ''}
      <main>
        <Banner />
        <Cases />
      </main>
    </>
  );
};

export default Home;
