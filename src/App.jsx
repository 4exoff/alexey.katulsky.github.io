import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './styles/App.scss';
import Work from './pages/work';
import About from './pages/about';
import Home from './pages/home';
import Contacts from './pages/contacts';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/work', name: 'caseStudies', Component: Work },
  { path: '/about', name: 'about', Component: About },
  { path: '/contacts', name: 'contacts', Component: Contacts },
];

function debounce(fn, ms) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header dimensions={dimensions} />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component dimensions={dimensions} />}
          />
        ))}
      </Routes>
      <Navigation dimensions={dimensions} />
    </>
  );
}

export default App;
