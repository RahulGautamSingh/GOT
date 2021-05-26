import React from "react";

export default class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      time: new Date().getTime(),
    };
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      time: new Date().getTime(),
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      time: new Date().getTime(),
    }));
  };
  render() {
    return (
      <React.Fragment>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Add + </button>
        <button onClick={this.decrement}>Subtract - </button>
      </React.Fragment>
    );
  }
}
