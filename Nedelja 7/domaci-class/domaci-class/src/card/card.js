import React, { Component } from "react";
import Emoji from "./emoji";
import Description from "./description";
import "./style.css";

class Card extends Component {
  render() {
    return (
      <div className="capsula">
        <Description text={this.props.string}></Description>
        <Emoji slika={this.props.url}></Emoji>
      </div>
    );
  }
}

export default Card;
