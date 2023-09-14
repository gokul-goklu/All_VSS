import { Component } from "react";

class InputExample extends Component {
  state = {
    uName: "",
    uEmail: "",
    uCity: "",
    country: "",
  };

  countryHandle = (e) => {
    this.setState({ country: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your full name"
            value={this.state.uName}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uName: e.target.value });
            }}
          />
        </div>
        <div className="form-elements">
          <p>Mail: </p>
          <input
            type="email"
            placeholder="Enter your email address"
            value={this.state.uEmail}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uEmail: e.target.value });
            }}
          />
        </div>
        <div className="form-elements">
          <p>City: </p>
          <input
            type="text"
            placeholder="City"
            value={this.state.uCity}
            onChange={(e) => {
              this.setState({ uCity: e.target.value });
            }}
          />
        </div>
        <div className="form-elements">
          <p>country: </p>
          <input
            type="text"
            placeholder="country"
            value={this.state.country}
            onChange={this.countryHandle}
          />
        </div>
        <div>
          <p>Name: {this.state.uName}</p>
          <p>Email: {this.state.uEmail}</p>
          <p>City:{this.state.uCity}</p>
          <p>Country: {this.state.country}</p>
        </div>
      </div>
    );
  }
}

export default InputExample;
