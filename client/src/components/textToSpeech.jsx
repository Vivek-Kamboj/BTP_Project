import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

  const styleFlexRow = { display: "flex", flexDirection: "row" };
  const styleContainerRatePitch = {
    display: "flex",
    flexDirection: "column",
    marginBottom: 12,
  };

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
          Text to Speech
        </h1>
      </div>
      <form>
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Synthesis.
          </p>
        )}
        {supported && (
          <React.Fragment>
            <div className="column">
              <div className="row m-2 p-2" style={{ textAlign: "center" }}>
                <p>
                  {`Type a message below then click 'Speak'
                and SpeechSynthesis will read it out.`}
                </p>
                <div style={{ display: "none" }}>
                  <label htmlFor="voice">Voice</label>
                  <select
                    id="voice"
                    name="voice"
                    value={voiceIndex || ""}
                    onChange={(event) => {
                      setVoiceIndex(event.target.value);
                    }}
                  >
                    <option value="">Default</option>
                    {voices.map((option, index) => (
                      <option key={option.voiceURI} value={index}>
                        {`${option.lang} - ${option.name}`}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-9 row">
                  <div className="col-6 px-5" style={styleContainerRatePitch}>
                    <div style={styleFlexRow}>
                      <label htmlFor="rate">Rate: </label>
                      <div className="rate-value">{rate}</div>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      defaultValue="1"
                      step="0.1"
                      id="rate"
                      onChange={(event) => {
                        setRate(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6 px-5" style={styleContainerRatePitch}>
                    <div style={styleFlexRow}>
                      <label htmlFor="pitch">Pitch: </label>
                      <div className="pitch-value">{pitch}</div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2"
                      defaultValue="1"
                      step="0.1"
                      id="pitch"
                      onChange={(event) => {
                        setPitch(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-9"
                  style={{
                    border: "4px solid #f8f9fa",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea
                    style={{
                      width: "100%",
                      minHeight: "150px",
                      fontSize: "17px",
                      backgroundColor: "#f8f9fa",
                    }}
                    id="message"
                    name="message"
                    placeholder="Please type message you want to make speek it out."
                    rows={3}
                    value={text}
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                  />
                </div>
                <div className="col-3">
                  {speaking ? (
                    <button
                      className="btn btn-secondary m-2 p-2"
                      style={{ width: "100%", height: "90%" }}
                      type="button"
                      onClick={cancel}
                    >
                      Stop
                    </button>
                  ) : (
                    <button
                      className="btn btn-success m-2 p-2"
                      style={{ width: "100%", height: "90%" }}
                      type="button"
                      onClick={() => speak({ text, voice, rate, pitch })}
                    >
                      Speak
                    </button>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </form>
    </React.Fragment>
  );
};

export default TextToSpeech;
