import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";
import { links } from "../data/navLinks";
import "../styles/components/header.scss";

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  }, [menuState]);

  return (
    <header className="nav">
      <div className="container">
        <nav className="row v-center space-between">
          <div className="nav__logo">
            <NavLink to="/" onClick={() => setMenuState({ menuOpened: false })}>
              K.A.V
            </NavLink>
          </div>

          <ul className="nav__links">
            {links &&
              links.map(({ id, link, title }) => (
                <li key={id + "-desktop"}>
                  <NavLink
                    to={link}
                    onClick={() => setMenuState({ menuOpened: false })}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
          </ul>

          <div className="nav__toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu__close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
