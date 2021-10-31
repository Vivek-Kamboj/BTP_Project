import React, { Component } from "react";

export default class CameraFeed extends Component {
  processDevices(devices) {
    devices.forEach((device) => {
      console.log(device.label);
      if (device.kind === "videoinput") this.setVideoDevice(device);
    });
  }

  async setVideoDevice(device) {
    const { deviceId } = device;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId },
    });
    console.log("stream", stream);
    if (this.videoPlayer && stream !== null)
      this.videoPlayer.srcObject = stream;
    this.videoPlayer?.play();
  }

  async componentDidMount() {
    const allDevices = await navigator.mediaDevices.enumerateDevices();
    console.log("allDevices", allDevices);
    this.processDevices(allDevices);
  }
  async componentWillUnmount() {
    if (this.videoPlayer && this.videoPlayer.srcObject)
      this.videoPlayer.srcObject.getTracks().forEach(function (track) {
        console.log("trabck", track);
        if (track.readyState === "live" && track.kind === "video") {
          track.stop();
        }
      });
  }

  takePhoto = () => {
    const { sendFile } = this.props;
    const context = this.canvas.getContext("2d");
    context.drawImage(this.videoPlayer, 0, 0, 680, 360);
    this.canvas.toBlob(sendFile);
    this.props.closeWindow();
  };

  render() {
    return (
      <div className="c-camera-feed">
        <div className="c-camera-feed__viewer">
          <video
            style={{ maxWidth: "100%" }}
            ref={(ref) => {
              console.log("videoref", ref);
              if (ref) this.videoPlayer = ref;
            }}
            width="680"
            heigh="360"
          />
        </div>
        <button className="btn btn-lg btn-primary" onClick={this.takePhoto}>
          Capture Image
        </button>
        <div className="c-camera-feed__stage" style={{ display: "none" }}>
          <canvas width="680" height="360" ref={(ref) => (this.canvas = ref)} />
        </div>
      </div>
    );
  }
}
