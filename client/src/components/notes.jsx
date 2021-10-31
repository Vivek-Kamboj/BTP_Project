import React from "react";

const Notes = (props) => {
  const handleDeleteNotes = (deleteNote) => {
    let x = [...props.notes];
    x = x.filter((note) => note !== deleteNote);
    console.log(x);
    props.setnotes(x);
  };
  return (
    <React.Fragment>
      <h3 className="display-5">Notes</h3>
      <hr />
      <div style={{ overflowY: "auto", maxHeight: "80%" }}>
        {props.notes &&
          props.notes.map((mynote) => (
            <div
              key={mynote.time}
              style={{
                margin: "12px",
                padding: "5px",
                border: "2px solid #f8f9fa",
                backgroundColor: "rgba(191, 191, 191, 0.4)",
                borderRadius: "5px",
              }}
            >
              <p>{mynote.val}</p>
              <button
                className="btn btn-warning m-2"
                onClick={() => {
                  handleDeleteNotes(mynote);
                  alert("Deleted!");
                }}
              >
                Delete
              </button>
              <button
                className="btn btn-info"
                onClick={() => {
                  navigator.clipboard.writeText(mynote.val);
                  alert("copied on dashboard!");
                }}
              >
                copy
              </button>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Notes;
