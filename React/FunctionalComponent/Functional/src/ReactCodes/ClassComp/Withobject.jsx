import { Component } from "react";

class ObjectProfile extends Component {
  state = {
    uName: "",
    uCity: "",
    uMail: "",
  };

  CityChange = (e) => {
    this.setState({ uCity: e.target.value });
  };
  render() {
    return (
      <div>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ uName: e.target.value });
          }}
        />
        <label>Mail: </label>
        <input
          type="email"
          onChange={(e) => {
            this.setState({ uMail: e.target.value });
          }}
        />
        <label>City: </label>
        <input type="text" onChange={this.CityChange} />

        <div>
          <h1>{this.state.uName}</h1>
          <h1>{this.state.uMail}</h1>
          <h1>{this.state.uCity}</h1>
        </div>
      </div>
    );
  }
}
export default ObjectProfile;
