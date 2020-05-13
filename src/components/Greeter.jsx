import React from "react";
import ReactDOM from "react-dom";

export default function Greeter() {
  var [name, setName] = React.useState("World");
  return (
    <div>
      <p>Hello, {name}!</p>
      <input
        placeholder="Enter your name."
        type="text"
        onChange={e =>
          e.target.value.length != 0
            ? setName(e.target.value)
            : setName("World")
        }
      />
    </div>
  );
}
