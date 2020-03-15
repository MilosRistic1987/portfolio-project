import React, { Component } from "react";
import "./style.css";

class Description extends Component {
  render() {
    return (
      <div className="descDiv">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Description;
