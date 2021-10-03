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
      <h3>Notes</h3>
      {props.notes &&
        props.notes.map((mynote) => (
          <div key={mynote.time} style={{ margin: "12px", padding: "5px" }}>
            <p>{mynote.val}</p>
            <button onClick={() => handleDeleteNotes(mynote)}>Delete</button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(mynote.val);
              }}
            >
              copy
            </button>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Notes;
