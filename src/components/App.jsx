import React from "react";
import Counter from "./Counter";
import Greeter from "./Greeter";
import Title from "./Title";
import Todo from "./Todo";
import Popup from "./Popup";
import Cards from "./Cards";

export default function App() {
  return (
    <div>
      <Title text="Popup" />
      <Popup
        buttonText="Display Popup!"
        title="Error"
        text="An Error has occured please try again later."
      />
      <Title text="Todo List" />
      <Todo />
      <Title text="Greeter" />
      <Greeter />
      <Title text="Counter" />
      <Counter />
      <Title text="Fun Cards!" />
      <Cards />
    </div>
  );
}
