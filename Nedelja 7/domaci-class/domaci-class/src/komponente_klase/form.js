import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input></input>
        <button>{this.props.string}</button>
      </form>
    );
  }
}

export default Form;
