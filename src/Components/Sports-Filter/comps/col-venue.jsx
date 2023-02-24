import React from "react";
import "./col-venue.css";
import { Link } from "react-router-dom";

const col_venue = (props) => {
  return (
    <div className="col-3">
      <Link to={props.link}>
        <img src={props.imgsrc} alt="" />
        <h4>{props.name}</h4>
        <p>{props.address}</p>
      </Link>
    </div>
  );
};

export default col_venue;
