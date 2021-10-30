import React from "react";
import { Link } from "react-router-dom";

const Feature = (props) => {
  return (
    <React.Fragment>
      <div className="col-lg-6 .col-sm-12 text-center">
        <Link to={`${props.to}`}>
          <div style={{ padding: "5px" }}>
            <button className="w-100 btn btn-outline-success btn-lg">
              {props.title}
            </button>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Feature;
