import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./komponente_klase/form";
import Card from "./card/card";

function App() {
  return (
    <>
      <Form string="Apply"></Form>
      <Card
        string="corona smiley"
        url="https://cdn3.iconfinder.com/data/icons/emoji-81/48/52-512.png"
      ></Card>
    </>
  );
}

export default App;
