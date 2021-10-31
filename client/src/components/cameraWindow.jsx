import React from "react";
import Camera from "./camera";
import styles from "./styles/cameraWindow.module.css";

const CameraWindow = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.win}`}>
        <div className={`${styles.content}`}>
          <h3 className="display-5">Camera</h3>
          <p>Please capture image using webcam/camera of your device</p>
          <button className={styles.cross} onClick={() => props.closeWindow()}>
            &#10060;
          </button>
          <Camera {...props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CameraWindow;
