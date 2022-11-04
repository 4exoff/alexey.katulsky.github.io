import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { openMenu, closeMenu } from "../animations/menuAnimations";

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
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
