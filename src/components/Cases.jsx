import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/cases.scss';

const caseStudies = [
  {
    id: 1,
    subtitle: 'Work',
    title: 'Work experience',
    img: 'work',
    link: 'work',
  },
  {
    id: 2,
    subtitle: 'About',
    title: 'About',
    img: 'about',
    link: 'about',
  },
  {
    id: 3,
    subtitle: 'Contacts',
    title: 'Social networks',
    img: 'contact',
    link: 'contacts',
  },
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='cases__container'>
        <div className='row'>
          {caseStudies.map(({ link, id, subtitle, title, img }) => (
            <NavLink to={link} key={id + '-' + link}>
              <article className='case'>
                <div className='case__details'>
                  <span>{subtitle}</span>
                  <h2>{title}</h2>
                </div>

                <div className='case__image'>
                  <img src={require(`../assets/${img}.jpg`)} alt={title} />
                </div>
              </article>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
