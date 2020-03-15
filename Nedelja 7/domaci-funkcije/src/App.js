import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./komponente_f-je/form";
import Card from "./komponente_f-je/card/card";

function App() {
  return (
    <>
      <Form string={"Submit"} />
      <Card
        string={"Crazy Smiley"}
        url={
          "https://png2.cleanpng.com/sh/bff095098d604246fba08564fdd4adfe/L0KzQYm3U8MxN5p1fZH0aYP2gLBuTflxcJDzfZ9ubXBteX7okQBtbV5uhAU2MUGwdb72ivl0NWZmetc6ZnW2crPsVPY6NmE1TqMANEm4QYa5UsQxQWU5S6kBOUaxgLBu/kisspng-iphone-emoji-apple-ios-11-emojis-5abe1fe3bbe4f9.0061549515224094437696.png"
        }
      ></Card>
    </>
  );
}

export default App;
