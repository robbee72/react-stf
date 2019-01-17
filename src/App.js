import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      message: " Vegas ( from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState({
      message: "Las Vegas ( from changed state)!"
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
        <button onClick={this.updateMessage}>Click me </button>
      </div>
    );
  }
}

export default Hello;
