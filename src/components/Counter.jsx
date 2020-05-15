import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
var x = 0;
var theColor = "black";

function updateColor(color) {
  if (color === "black") {
    return "blue";
  } else if (color === "blue") {
    return "red";
  } else if (color === "red") {
    return "green";
  } else {
    return "black";
  }
}

export default function Counter() {
  return (
    <div>
      <h1
        style={{
          color: theColor,
          paddingRight: "10%"
        }}
      >
        Count: {x}
      </h1>
      <button
        onClick={() => {
          x += 1;
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          x -= 1;
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
      >
        - 1
      </button>
      <button
        onClick={() => {
          x = 0;
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          theColor = updateColor(theColor);
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
      >
        Change Color
      </button>
    </div>
  );
}
