import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/object-detection">object-detection</Link>
        </li>
        <li>
          <Link to="/image-to-text">image-to-text</Link>
        </li>
        <li>
          <Link to="/text-to-speech">text-to-speech</Link>
        </li>
        <li>
          <Link to="/speech-to-text">speech-to-text</Link>
        </li>
        <li>
          <Link to="/assistant">assistant</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Home;
