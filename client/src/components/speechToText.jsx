import React, { useState } from "react";
import Notes from "./notes";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const [notes, setnotes] = useState([
    { time: "1", val: "hello project" },
    { time: "2", val: "this is btp project made by vivek" },
    { time: "3", val: "hi i am vivek kamboj 2018 imt 109" },
  ]);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  // SpeechRecognition.startListening({ continuous: false });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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
          Speech To Text
        </h1>
      </div>
      <div className="column">
        <div className="row mx-2">
          <div className="col-5 p-5" style={{ border: "4px solid #f8f9fa" }}>
            {!listening && (
              <div className="p-3 mb-2 bg-light text-dark">
                Please click "Start" and start speaking.
              </div>
            )}
            {listening && (
              <div className="p-3 mb-2 bg-light text-dark">
                Please click "Stop" and stop speaking.
              </div>
            )}
            <p>Microphone: {listening ? "on" : "off"}</p>
            {!listening && (
              <button
                className="btn btn-success "
                onClick={() =>
                  SpeechRecognition.startListening({ continuous: true })
                }
              >
                Start
              </button>
            )}
            {listening && (
              <button
                className="btn btn-secondary "
                onClick={SpeechRecognition.abortListening}
              >
                Stop
              </button>
            )}
            <button className="btn btn-warning mx-2" onClick={resetTranscript}>
              Reset
            </button>
            <hr />
            {transcript && (
              <React.Fragment>
                <h5 className="mx-3">You speak:</h5>
                <div
                  style={{
                    margin: "4px",
                    padding: "10px",
                    border: "2px solid #f8f9fa",
                    borderRadius: "10px",
                    background: "rgba(191, 191, 191, 0.7)",
                    minHeight: "90px",
                  }}
                >
                  {transcript}
                </div>
                <button
                  className="btn btn-info mx-2"
                  onClick={() => {
                    const x = notes;
                    SpeechRecognition.abortListening();
                    x.unshift({ time: Date.now(), val: transcript });
                    setnotes(x);
                    resetTranscript();
                  }}
                >
                  Save
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    SpeechRecognition.abortListening();
                    navigator.clipboard.writeText(transcript);
                  }}
                >
                  copy
                </button>
              </React.Fragment>
            )}
          </div>
          <div
            className="col-7 px-5 py-2"
            style={{
              border: "4px solid #f8f9fa",
              height: "500px",
            }}
          >
            <Notes notes={notes} setnotes={setnotes} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SpeechToText;
