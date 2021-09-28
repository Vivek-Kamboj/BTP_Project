import React, { useState } from "react";
import FileUpload from "./FileUpload";

const ObjectDetection = () => {
  const [imageInputURL, setImageInputUrl] = useState("");
  const [imageOutputURL, setImageOutputUrl] = useState("");
  const [text, setText] = useState("");

  const speakOutput = (text) => {
    // speak({ text: `This Image contains: ${text}` });
    console.log(text);
  };
  return (
    <React.Fragment>
      <h1>ObjectDetection</h1>
      <FileUpload
        setImageInputUrl={setImageInputUrl}
        setImageOutputUrl={setImageOutputUrl}
        setText={setText}
        speak={speakOutput}
        url={"http://localhost:5000//object-recognition"}
      />
      {imageInputURL && (
        <div>
          <h3>Input</h3>
          <img src={imageInputURL} alt="img" />{" "}
        </div>
      )}
      {imageOutputURL && (
        <div>
          <h3>Output</h3>
          <img src={imageOutputURL} alt="img" />
        </div>
      )}
      {text && (
        <div>
          <h1>Image Contains: </h1>
          <h3>{text}</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default ObjectDetection;
