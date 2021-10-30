import React from "react";
import Feature from "./FeatureBlock";
import ImageLanding from "./image_landing";

const Home = () => {
  return (
    <React.Fragment>
      <ImageLanding />
      <section>
        <h2>About</h2>
        <div style={{ padding: 12, margin: 15, border: "2px solid gray" }}>
          .
        </div>
      </section>
      <section id="Features">
        <h2>Features</h2>
        <div style={{ padding: 12, margin: 15, border: "2px solid gray" }}>
          <div className="container">
            <div className="row justify-content-md-center">
              <Feature to="/object-detection" title="object-detection" />

              <Feature to="/image-to-text" title="image-to-text" />

              <Feature to="/text-to-speech" title="text-to-speech" />

              <Feature to="/speech-to-text" title="speech-to-text" />

              <Feature to="/assistant" title="assistant" />
            </div>
          </div>
        </div>
      </section>
      <h3>Helpful things</h3>
      <h3>Quote</h3>
    </React.Fragment>
  );
};

export default Home;
