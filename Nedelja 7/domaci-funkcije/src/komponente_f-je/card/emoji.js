import React from "react";
import "./style.css";

const Emoji = props => {
  return (
    <div>
      <img src={props.url}></img>
    </div>
  );
};

export default Emoji;
