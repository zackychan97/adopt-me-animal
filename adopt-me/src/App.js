import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Milo" animal="Dog" breed="Jack Russel Terrier" />
      <Pet name="Diesel" animal="Dog" breed="Lab" />
      <Pet name="Whiskers" animal="Cat" breed="Tabby" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
