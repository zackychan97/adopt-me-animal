import React from "react";
import ReactDOM from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Milo",
      animal: "Dog",
      breed: "Jack Russel",
    }),
    React.createElement(Pet, { name: "Diesel", animal: "Dog", breed: "Lab" }),
    React.createElement(Pet, {
      name: "Goldy",
      animal: "Dog",
      breed: "Lab/Poodle",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
