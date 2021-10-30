import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className={styles.bodyPadding}></div>
      <nav className={`navbar navbar-expand-md sticky-top ${styles.navbar}  `}>
        <li className={`navbar-brand ${styles.title}`}>
          <Link className={styles.brand} to="/">
            Aakhe
          </Link>
        </li>

        <button
          style={{ color: "inherit" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa fa-bars p-1"
            style={{ color: "inherit" }}
            aria-hidden="true"
          ></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className={`navbar-nav `} style={{ margin: "0 0 0 auto" }}>
            <li style={{ float: "right" }}>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>

              {/* <ul
                className="nav-link dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul> */}
            </li>
            <li style={{ float: "right" }}>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
