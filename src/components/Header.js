import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" onClick={() => setMenuState({ menuOpened: false })}>
              K.A.V
            </NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink
                to="/work"
                onClick={() => setMenuState({ menuOpened: false })}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuState({ menuOpened: false })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                onClick={() => setMenuState({ menuOpened: false })}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
