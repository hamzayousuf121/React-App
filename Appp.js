import React, { Component } from "react";
import "./App.css";
class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BackgroundColor: "white"
    };
  }
  colorChange =(color)=>{
      this.setState({color})
  }
  render() {
    return (
      <div className="App">
        <div
          className="div"
          style={{ backgroundColor: this.state.color }}
        />
        <br />
        <button
          onClick={() => this.colorChange("red")}
          className="button red"
        >
          Red
        </button>
        <button
          onClick={() => this.colorChange("pink")}
          className="button pink"
        >
          Pink
        </button>
        <button
          onClick={() => this.colorChange("green")}
          className="button green"
        >
          green
        </button>
        <button
          onClick={() => this.colorChange("yellow")}
          className="button yellow"
        >
          yellow
        </button>
        <button
          onClick={() => this.colorChange("purple")}
          className="button purple"
        >
          Purple
        </button>
        <button
          onClick={() => this.colorChange("red")}
          className="button red"
        >
          Red
        </button>
        <div className="div" style={{ backgroundColor: this.state.color }}>
          {" "}
        </div>
      </div>
    );
  }
}
export default Appp;
