import { Component } from "react";

export class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. Contructor Loaded");
  }

  componentDidMount() {
    console.log("3.The component is ready to work");
  }

  render() {
    console.log("2. I'm rendering now");
    return <div>This is a class component</div>;
  }
}

export default Lifecycle;
