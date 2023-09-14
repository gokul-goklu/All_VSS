import { Component } from "react";

class ArgCounter extends Component {
  state = {
    count: 0,
  };
  onIncrease = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };
  onDecrease = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>Count is : {this.state.count}</h1>
        <button onClick={this.onIncrease}>Inc</button>
        <button onClick={this.onDecrease}>dec</button>
      </div>
    );
  }
}
export default ArgCounter;
