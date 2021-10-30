import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Aboutus from "./components/aboutus";
import ObjectDetection from "./components/objectDetection";
import ImageToText from "./components/imageToText";
import TextToSpeech from "./components/textToSpeech";
import SpeechToText from "./components/speechToText";
import Assistant from "./components/assistant";
import PageNotFound from "./components/pageNotFound";
import "./App.css";

const App = () => (
  <React.Fragment>
    <div id="page-container">
      <div id="content-wrap">
        <Navbar />
        <div>
          <Switch>
            <Route path="/object-detection" exact component={ObjectDetection} />
            <Route path="/image-to-text" exact component={ImageToText} />
            <Route path="/text-to-speech" exact component={TextToSpeech} />
            <Route path="/speech-to-text" exact component={SpeechToText} />
            <Route path="/assistant" exact component={Assistant} />
            <Route path="/about-us" exact component={Aboutus} />
            <Route path="/" exact component={Home} />
            <Route path="/page-not-found" exact component={PageNotFound} />

            <Redirect to="/page-not-found" />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </React.Fragment>
);

export default App;
