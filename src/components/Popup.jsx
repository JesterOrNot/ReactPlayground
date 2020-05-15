import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle() {
    this.state.show = !this.state.show;
    ReactDOM.render(<App />, document.querySelector("#root"));
  }

  render() {
    return (
      <div>
        <button onClick={e => this.toggle()}>{this.props.buttonText}</button>
        <div class={this.state.show ? "modal show-modal" : "modal"}>
          <div class="modal-content">
            <span onClick={e => this.toggle()} class="close-button">
              &times;
            </span>
            <h1>{this.props.title}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
