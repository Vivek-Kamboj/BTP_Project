import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const { speak } = useSpeechSynthesis();
  const onClick = (ev) => {
    console.log("hi");
    speak({ text: "hi" });
  };
  return (
    <React.Fragment>
      <h1 onClick={onClick}>TextToSpeech</h1>
    </React.Fragment>
  );
};

export default TextToSpeech;
