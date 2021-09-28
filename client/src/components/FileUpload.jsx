import React, { useState } from "react";
// import Camera from "./camera";

const FileUpload = (props) => {
  // let uploadInput = "";

  const [preview, setPreview] = useState();
  const [uploadImage, setUploadImage] = useState();
  const handleUploadImage = (ev) => {
    ev.preventDefault();

    const data = new FormData();
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
      <form onSubmit={handleUploadImage}>
        <div>
          <input
            // ref={(ref) => {
            //   uploadInput = ref;
            // }}
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
        {/* <Camera
          sendFile={async (file) => {
            uploadInput = file;
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            setUploadImage(file);
            console.log("camera");
          }}
        /> */}
        <div>
          <button>Upload</button>
        </div>
      </form>
      {preview && <img src={preview} alt="Uploaded" />}
    </React.Fragment>
  );
};

export default FileUpload;
