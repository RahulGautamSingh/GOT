import React from "react";

export default class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false
    };
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      toggle: prevState.toggle
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      toggle: prevState.toggle
    }));
  };
  

    toggleFn = () => {
      this.setState((prevState) => ({
        count: 0,
        toggle: !prevState.toggle
      }));
    };
  

  render(){
    return (
     <div>
        <button className="toggle" onClick={this.toggleFn}>
          Toggle
        </button>
        {this.state.toggle && (
          <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>Add + </button>
            <button onClick={this.decrement}>Subtract - </button>
          </div>
        )}
        {!this.state.toggle && (
          <p></p>
        )}
      </div>
    );
  }
}

