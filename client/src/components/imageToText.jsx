import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { useSpeechSynthesis } from "react-speech-kit";

const ImageToText = () => {
  const [imageInputURL, setImageInputUrl] = useState("");
  const [imageOutputURL, setImageOutputUrl] = useState("");
  const [text, setText] = useState("");
  const { speak, cancel, speaking } = useSpeechSynthesis();

  const speakOutput = (text) => {
    speak({ text: `This Image contains: ${text}` });
  };

  // speak({ text: "hi" });
  return (
    <React.Fragment>
      <div
        className="row m-2 p-4"
        style={{ background: "#f5f5f5", textAlign: "center" }}
      >
        <h1
          style={{
            fontFamily: "Georgia, Times, serif",
            fontSize: "45px",
            fontWeight: "bolder",
          }}
        >
          Image To Text
        </h1>
      </div>
      <FileUpload
        setImageInputUrl={setImageInputUrl}
        setImageOutputUrl={setImageOutputUrl}
        setText={setText}
        speak={speakOutput}
        url={"http://localhost:5000/image-to-text"}
      />
      <div className="container border my-5">
        <div className="row" style={{ textAlign: "center" }}>
          {imageInputURL && (
            <div className="col-6 p-2">
              <h3 className="display-5">Input Image</h3>
              <img
                style={{
                  width: "100%",
                  border: "4px solid #d2d2d2",
                  borderRadius: "5px",
                }}
                src={imageInputURL}
                alt="img"
              />
            </div>
          )}
          {imageOutputURL && (
            <div className="col-6 p-2">
              <h3 className="display-5">Result</h3>
              <img
                style={{
                  width: "100%",
                  border: "4px solid #d2d2d2",
                  borderRadius: "5px",
                }}
                src={imageOutputURL}
                alt="img"
              />
            </div>
          )}
        </div>
        {text && (
          <div
            className="row"
            style={{ marginTop: "30px", borderTop: "2px solid gray" }}
          >
            <hr />
            <h1>
              Image Contains:
              {speaking ? (
                <button
                  className="btn btn-secondary m-2 p-2"
                  type="button"
                  onClick={cancel}
                >
                  Stop
                </button>
              ) : (
                <button
                  className="btn btn-success m-2 p-2"
                  type="button"
                  onClick={() => speak({ text })}
                >
                  Speak
                </button>
              )}
            </h1>
            <hr />
            <div
              className="p-5 m-5"
              style={{ background: "rgba(235, 255, 251, 0.8)", width: "85%" }}
            >
              <h5>{text}</h5>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default ImageToText;
