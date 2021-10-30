import React, { useState } from "react";
import Camera from "./cameraWindow";

const Util = (props) => {
  const [showCamera, setShowCamera] = useState(false);
  const closeWindow = () => {
    setShowCamera(false);
  };
  return (
    <React.Fragment>
      <button
        className="btn btn-light btn-outline-secondary w-100 "
        onClick={() => {
          setShowCamera(true);
        }}
      >
        Capture Photo
      </button>
      {showCamera && <Camera closeWindow={closeWindow} {...props} />}
    </React.Fragment>
  );
};

export default Util;
