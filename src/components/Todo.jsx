import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, todos: this.state.todos });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value !== "") {
      this.setState({
        value: "",
        todos: this.state.todos.concat([this.state.value])
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter a todo"
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.todos.map((item, index) => {
            console.log(`item: ${item}`);
            return (
              <div
                style={{
                  backgroundColor: "#f8f8f8",
                  width: "83%",
                  marginBottom: "20px",
                  color: "#333333"
                }}
              >
                <input
                  type="checkbox"
                  onChange={
                    ({},
                    e =>
                      e.currentTarget.parentElement.children[1].classList.toggle(
                        "crossedOut"
                      ))
                  }
                />
                <li style={{ display: "inline" }} key={index}>
                  {<span>{item}</span>}
                </li>
                <button
                  onClick={
                    ({},
                    evt => {
                      evt.currentTarget.parentElement.remove();
                      ReactDOM.render(<App />, document.querySelector("#root"));
                    })
                  }
                  style={{
                    right: "13%",
                    height: "18px",
                    position: "absolute"
                  }}
                >
                  Delete
                </button>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
