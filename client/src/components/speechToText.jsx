import React, { useState } from "react";
import Notes from "./notes";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const [notes, setnotes] = useState([
    { time: "1", val: "hi" },
    { time: "2", val: "and" },
    { time: "3", val: "bye" },
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
    <div>
      SpeechToText
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.abortListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      {transcript && (
        <React.Fragment>
          <button
            onClick={() => {
              const x = notes;
              SpeechRecognition.abortListening();
              x.push({ time: Date.now(), val: transcript });
              setnotes(x);
              resetTranscript();
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              SpeechRecognition.abortListening();
              navigator.clipboard.writeText(transcript);
            }}
          >
            copy
          </button>
        </React.Fragment>
      )}
      <p>====================</p>
      <Notes notes={notes} setnotes={setnotes} />
    </div>
  );
};
export default SpeechToText;
