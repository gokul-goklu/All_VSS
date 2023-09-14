import { Component } from "react";

class LifeCycle extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    count: 0,
  };
  // console.log("Iam Constructor");

  componentDidMount() {
    console.log("Iam did mount");
  }

  HandleDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log(" Iam render");
    return (
      <div>
        <h1>Welcome</h1>
        <h1>The count is: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <button onClick={this.HandleDecrease}>Decrease</button>
      </div>
    );
  }
}
export default LifeCycle;
