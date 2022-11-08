import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { openMenu, closeMenu } from "../animations/menuAnimations";
import { links } from "../data/navLinks";
import "../styles/components/navigation.scss";

const Navigation = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  }, [menuState]);

  return (
    <nav className="mobile-nav">
      <div className="container">
        <div className="mobile-nav__columns">
          <ul className="mobile-nav__links">
            {links &&
              links.map(({ id, link, title }) => (
                <li key={id + "-mobile"}>
                  <NavLink
                    to={link}
                    onClick={() => setMenuState({ menuOpened: false })}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
