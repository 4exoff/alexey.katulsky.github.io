import React from 'react';
import { Slide } from 'react-awesome-reveal';
import '../styles/components/about.scss';

const AboutSection = (props) => {
  const { id, title, description, stack, date } = props.about;

  return (
    <section className='about' id={id}>
      <Slide
        direction='left'
        duration='2000'
        className='about__title'
        triggerOnce
      >
        <h4>{title}</h4>
      </Slide>

      <div className='about__content'>
        {description && description.map((el, index) => <p key={index}>{el}</p>)}
        {stack && (
          <ul id={'stack-' + id} className='stack'>
            {stack.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        )}
        {date && <span className='about__content-date'>{date}</span>}
      </div>
    </section>
  );
};

export default AboutSection;
