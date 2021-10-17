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
            <li style={{ float: "right" }}>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            <li style={{ float: "right" }}>
              hi
              <li className="nav-item dropdown">1</li>
              <li>2</li>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
