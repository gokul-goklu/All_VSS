import { Component } from "react";
class Rough extends Component {
  state = {
    count: 0,
    uName: "",
  };
  handleIncrement = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  handleName = (e) => {
    this.setState(() => ({
      uName: e.target.value,
    }));
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>;
        <input type="text" onChange={this.handleName} />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h3>{this.state.uName}</h3>
      </div>
    );
  }
}
export default Rough;
