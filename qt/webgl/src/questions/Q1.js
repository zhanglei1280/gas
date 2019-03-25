import React, { Component } from 'react';
import Cube from "../Cube"

class Q1 extends Component {

  componentDidMount = () => {
    const gl = new Cube()
    gl.run()
  }

  render() {
    return (
      <canvas 
      className="webglcanvas"
      style={{
        border: "none",
        backgroundColor: "black"
      }}
      width="600" height="500"
      >
      </canvas>
    );
  }
}

export default Q1;
