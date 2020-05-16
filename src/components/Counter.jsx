import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button from "./Button";
var x = 0;
var theColor = "white";

function updateColor(color) {
  if (color === "white") {
    return "blue";
  } else if (color === "blue") {
    return "red";
  } else if (color === "red") {
    return "green";
  } else {
    return "white";
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
      <Button
        onClick={() => {
          x += 1;
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
        iconName="fa-plus"
        tooltip="Add one."
      />
      <Button
        onClick={() => {
          x -= 1;
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
        iconName="fa-minus"
        tooltip="Subtract one."
      />
      <Button
        onClick={() => {
          x = 0;
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
        iconName="fa-undo"
        tooltip="Reset count."
      />
      <Button
        onClick={() => {
          theColor = updateColor(theColor);
          ReactDOM.render(<App />, document.querySelector("#root"));
        }}
        iconName="fa-palette"
        tooltip="Change Color."
      />
    </div>
  );
}
