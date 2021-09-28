import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { useSpeechSynthesis } from "react-speech-kit";

const ImageToText = () => {
  const [imageInputURL, setImageInputUrl] = useState("");
  const [imageOutputURL, setImageOutputUrl] = useState("");
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  const speakOutput = (text) => {
    speak({ text: `This Image contains: ${text}` });
  };

  // speak({ text: "hi" });
  return (
    <React.Fragment>
      <h1>ImageToText</h1>
      <FileUpload
        setImageInputUrl={setImageInputUrl}
        setImageOutputUrl={setImageOutputUrl}
        setText={setText}
        speak={speakOutput}
        url={"http://localhost:5000/image-to-text"}
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
export default ImageToText;
