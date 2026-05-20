import React from "react";
import "./Event.css"; // Make sure to import your stylesheet here!

const Event = ({ name }) => {
  return <div className="Event">{name}</div>;
};

export default Event;
