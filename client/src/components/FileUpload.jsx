import React, { useState } from "react";
import Camera from "./camerautil";

const FileUpload = (props) => {
  // let uploadInput = "";

  const [preview, setPreview] = useState();
  const [uploadImage, setUploadImage] = useState();
  const handleUploadImage = () => {
    const data = new FormData();
    console.log("============here===========");
    data.append("file", uploadImage);
    // data.append("file", uploadInput.files[0]);
    // data.append("filename", this.fileName.value);
    fetch(props.url, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json().then((body) => {
          props.setImageOutputUrl(
            `http://localhost:5000/display/${body.dataOutput}?${Date.now()}`
          );
          props.setImageInputUrl(
            `http://localhost:5000/display/${body.dataInput}?${Date.now()}`
          );
          props.setText(body.text);
          props.speak(body.text);
          setPreview(undefined);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setPreview(undefined);
      return;
    }
    setUploadImage(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  return (
    <React.Fragment>
      <div className="container ">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <p className="text-center">
            Please select any file or capture photo from webcam/camera.
          </p>
          <div className="row">
            <div
              className="col-6 p-4"
              style={{
                border: "4px solid #f8f9fa",
                borderRight: "2px solid rgba(126, 1188, 159,1) ",
              }}
            >
              <input
                // ref={(ref) => {
                //   uploadInput = ref;
                // }}
                className="form-control btn-outline-secondary"
                type="file"
                onChange={onSelectFile}
              />
            </div>
            {/* <div>
          <input
            ref={(ref) => {
              this.fileName = ref;
            }}
            type="text"
            placeholder="Enter the desired name of file"
          />
        </div> */}
            <br />
            <div
              className="col-6 p-4"
              style={{
                border: "4px solid #f8f9fa",
                borderLeft: "2px solid rgba(126, 1188, 159,1) ",
              }}
            >
              <Camera
                sendFile={async (file) => {
                  // var uploadInput = file;
                  const objectUrl = URL.createObjectURL(file);
                  setPreview(objectUrl);
                  setUploadImage(file);
                  console.log("camera");
                }}
              />
            </div>
          </div>
          <div className="row px-4 m-2 mx-5">
            <button
              className="btn btn-success"
              disabled={!preview}
              onClick={() => handleUploadImage()}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
      {preview && (
        <div
          style={{
            border: "4px solid #f8f9fa",
            padding: "10px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <h3 className="display-5">Preview</h3>
          <img style={{ maxWidth: "50%" }} src={preview} alt="Uploaded" />
        </div>
      )}
    </React.Fragment>
  );
};

export default FileUpload;
