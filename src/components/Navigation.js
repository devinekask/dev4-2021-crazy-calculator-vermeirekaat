import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
          >
            BloemBoeket
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={styles.link}
            activeClassName={styles.active}
          >
            BloemGedicht
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
