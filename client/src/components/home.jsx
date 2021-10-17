import React from "react";
import Feature from "./FeatureBlock";
import ImageLanding from "./image_landing";

const Home = () => {
  return (
    <React.Fragment>
      <ImageLanding />
      <h1>Home</h1>
      <section id="Features">
        <ul>
          <li>
            <Feature to="/object-detection" title="object-detection" />
          </li>
          <li>
            <Feature to="/image-to-text" title="image-to-text" />
          </li>

          <li>
            <Feature to="/text-to-speech" title="text-to-speech" />
          </li>
          <li>
            <Feature to="/speech-to-text" title="speech-to-text" />
          </li>
          <li>
            <Feature to="/assistant" title="assistant" />
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Home;
