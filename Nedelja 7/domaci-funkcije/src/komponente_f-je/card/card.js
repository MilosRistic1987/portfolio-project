import React from "react";
import Emoji from "./emoji";
import Description from "./description";
import "./style.css";

const Card = props => {
  return (
    <div className="capsula">
      <Description string={props.string}></Description>
      <Emoji url={props.url}></Emoji>
    </div>
  );
};

export default Card;
