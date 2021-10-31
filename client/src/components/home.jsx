import React from "react";
import Feature from "./FeatureBlock";
import ImageLanding from "./image_landing";
import NobleCause from "./nobelCause";

const Home = () => {
  return (
    <React.Fragment>
      <ImageLanding />
      <section>
        <div
          className="row"
          style={{
            textAlign: "center",
            paddingTop: "20px",
            background: "#f5f5f5",
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, Times, serif",
              fontSize: "45px",
              fontWeight: "bolder",
            }}
          >
            About
          </h2>
          <div
            style={{
              padding: 12,
              margin: 15,

              textAlign: "center",
            }}
          >
            According to a survey conducted by WHO in 2010, 285 million people
            are visually impaired worldwide, and about 60 million people are
            from India. The people are not able to recognize their environment
            and not able to feel its surroundings. The main goal of my project
            is to give virtually impaired people a way to observe their
            surroundings by using the latest advancements in technology like
            Artificial Intelligence, Machine Learning, Image and Text
            Recognition, etc. Through this project I want to help visually
            impaired person by giving support and assistance to visually
            impaired people.
            <span>
              {"   "}
              <button className="btn btn-sm btn-info">For more info...</button>
            </span>
          </div>
        </div>
      </section>

      <section id="Features">
        <div className="row" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Georgia, Times, serif",
              fontSize: "45px",
              fontWeight: "bolder",
              paddingTop: "30px",
            }}
          >
            Features
          </h2>

          <div
            style={{
              padding: 12,
              margin: 15,
              backgroundColor: "rgba(235, 255, 251, 0.1)",
            }}
          >
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
        </div>
      </section>

      <NobleCause />
    </React.Fragment>
  );
};

export default Home;
