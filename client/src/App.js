import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./components/home";
import ObjectDetection from "./components/objectDetection";
import ImageToText from "./components/imageToText";
import TextToSpeech from "./components/textToSpeech";
import SpeechToText from "./components/speechToText";
import Assistant from "./components/assistant";
import PageNotFound from "./components/pageNotFound";
// import { CameraFeed } from "./components/camera";
// import FileUpload from "./components/FileUpload";

const App = () => (
  <React.Fragment>
    <div>Navbar</div>
    <div style={{ border: "2px solid gray", padding: "10px" }}>
      <Switch>
        <Route path="/object-detection" exact component={ObjectDetection} />
        <Route path="/image-to-text" exact component={ImageToText} />
        <Route path="/text-to-speech" exact component={TextToSpeech} />
        <Route path="/speech-to-text" exact component={SpeechToText} />
        <Route path="/" exact component={Home} />
        <Route path="/page-not-found" exact component={PageNotFound} />

        <Redirect to="/page-not-found" />
      </Switch>
    </div>
    <Assistant />
    {/* <div>
      <h1>File Upload</h1>
      <FileUpload />
    </div> */}
    <div>Footer</div>
    {/* <CameraFeed
      sendFile={() => {
        console.log("hiii camera");
      }}
    /> */}
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
        <Link to="/">home</Link>
      </li>
    </ul>
  </React.Fragment>
);

export default App;
