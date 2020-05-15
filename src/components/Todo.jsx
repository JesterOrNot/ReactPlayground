import React from "react";

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
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
