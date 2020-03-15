import React, { Component } from "react";
import "./style.css";

class Emoji extends Component {
  render() {
    return (
      <div className="imgDiv">
        <img src={this.props.slika}></img>
      </div>
    );
  }
}

export default Emoji;
