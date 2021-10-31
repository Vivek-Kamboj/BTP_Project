import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  const [showFeature, setShowFeature] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.bodyPadding}></div>
      <nav className={`navbar navbar-expand-md sticky-top ${styles.navbar}  `}>
        <li className={`navbar-brand ${styles.title}`}>
          <Link className={styles.brand} to="/">
            Aakhe - BTP Project
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
          <ul className={`navbar-nav`} style={{ margin: "0 0 0 auto" }}>
            <li style={{ float: "right" }}>
              <Link
                to="/"
                onClick={(ev) => {
                  ev.preventDefault();
                  setShowFeature(!showFeature);
                }}
              >
                FEATURES
              </Link>
              {showFeature && (
                <ul className="nav-link dropdown-menu">
                  <li>
                    <Link
                      className={` ${styles.x}`}
                      to="/object-detection"
                      onClick={() => {
                        setShowFeature(false);
                      }}
                    >
                      Object-detection
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.x}
                      to="/image-to-text"
                      onClick={() => {
                        setShowFeature(false);
                      }}
                    >
                      Image-To-Text
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.x}
                      to="/text-to-speech"
                      onClick={() => {
                        setShowFeature(false);
                      }}
                    >
                      Text-To-Speech
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.x}
                      to="/speech-to-text"
                      onClick={() => {
                        setShowFeature(false);
                      }}
                    >
                      Speech-To-Text
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.x}
                      to="/assistant"
                      onClick={() => {
                        setShowFeature(false);
                      }}
                    >
                      Assistant
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li style={{ float: "right" }}>
              <Link to="/about-us">ABOUT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
