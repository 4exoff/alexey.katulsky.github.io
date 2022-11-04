import React from "react";
import { NavLink } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    subtitle: "Work",
    title: "Work experience",
    img: "work",
    link: "work",
  },
  {
    id: 2,
    subtitle: "About",
    title: "Biography",
    img: "about",
    link: "about",
  },
  {
    id: 3,
    subtitle: "Contacts",
    title: "Social networks",
    img: "contact",
    link: "contacts",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map((caseItem) => (
            <NavLink to={caseItem.link} key={caseItem.id}>
              <div className="case">
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>

                <div className="case-image">
                  <img
                    src={require(`../assets/${caseItem.img}.jpg`)}
                    alt={caseItem.title}
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
