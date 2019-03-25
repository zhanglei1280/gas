import React, { Component } from 'react';
import Soleil from "./Soleil"
import ToggleButton from "react-toggle-button"

// user interface
class Q2 extends Component {

  state = {
    auto: true
  }

  gl

  componentDidMount = () => {
    this.gl = new Soleil()
    this.gl.run()
  }

  onAuto = e => {
    //e.stopPropagation()
    this.setState((prev) => ({auto: !(prev.auto)}))
    this.gl.toggleAuto()
  }

  render() {
    return (
      <div>

        <div className="flexcontainer">
          Auto camera
          &nbsp;&nbsp;
          <ToggleButton
            value={this.state.auto}
            onClick={this.onAuto}
          />
        </div>

        <canvas 
          id="soleil"
          style={{
            border: "none",
            backgroundColor: "black"
          }}
          width="600" height="500"
          >
        </canvas>
      </div>
    );
  }
}

export default Q2;
