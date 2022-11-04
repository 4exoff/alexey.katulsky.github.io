import React from "react";
// import "../styles/components/socials.scss";

const socials = [
  {
    id: 1,
    icon: "linkedin",
    path: "https://www.linkedin.com/in/aleksei-katulski-652809214/",
  },
  {
    id: 2,
    icon: "telegram",
    path: "https://t.me/kavtestkav",
  },
  {
    id: 3,
    icon: "github",
    path: "https://github.com/4exoff",
  },
  {
    id: 4,
    icon: "skype",
    path: "https://join.skype.com/invite/ecpC0p9g5v3T",
  },
];

const Socials = () => {
  return (
    <>
      <ul className="socials">
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;
