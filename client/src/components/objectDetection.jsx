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
      <div className="container border my-5">
        <div className="row" style={{ textAlign: "center" }}>
          {imageInputURL && (
            <div className="col-6 p-2">
              <h3 className="display-5">Input Image</h3>
              <img
                style={{ width: "100%" }}
                src={imageInputURL}
                alt="img"
              />{" "}
            </div>
          )}
          {imageOutputURL && (
            <div className="col-6 p-2">
              <h3 className="display-5">Result</h3>
              <img style={{ width: "100%" }} src={imageOutputURL} alt="img" />
            </div>
          )}
        </div>
        {text && (
          <div className="row">
            <h1>Image Contains: </h1>
            <h3>{text}</h3>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ObjectDetection;
