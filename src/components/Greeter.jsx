import React from "react";

export default function Greeter() {
  var [name, setName] = React.useState("World");
  return (
    <div>
      <p style={{color: "white"}}>Hello, {name}!</p>
      <input
        placeholder="Enter your name."
        type="text"
        onChange={e =>
          e.target.value.length !== 0
            ? setName(e.target.value)
            : setName("World")
        }
      />
    </div>
  );
}
