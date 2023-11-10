import { Component } from "react";

export class CounterClass extends Component {
  state = {
    count: 0,
  };
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };


  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default CounterClass;
