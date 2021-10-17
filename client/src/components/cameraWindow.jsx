import React from "react";
import Camera from "./camera";
import styles from "./styles/cameraWindow.module.css";

const CameraWindow = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.win}`}>
        <div className={`${styles.content}`}>
          <p>Camera</p>
          <button onClick={() => props.closeWindow()}>X</button>
          <Camera {...props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CameraWindow;
