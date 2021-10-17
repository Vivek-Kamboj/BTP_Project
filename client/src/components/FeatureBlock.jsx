import React from "react";
import { Link } from "react-router-dom";

const Feature = (props) => {
  return (
    <React.Fragment>
      <div style={{ margin: "2px", color: "green", border: "2px solid gray" }}>
        <Link to={`${props.to}`}>{props.title}</Link>
      </div>
    </React.Fragment>
  );
};

export default Feature;
