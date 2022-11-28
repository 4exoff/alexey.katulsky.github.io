import React from 'react';
import '../styles/components/socials.scss';

const Socials = (props) => {
  const { socials } = props;

  return (
    <ul className='socials'>
      {socials &&
        socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target='_blank' rel='noopener noreferrer'>
              <i className={`fab fa-${icon}`} aria-hidden='true' />
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Socials;
