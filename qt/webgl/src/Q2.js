import React, { Component } from 'react';
import Soleil from "./Soleil"

class Q2 extends Component {

  componentDidMount = () => {
    const gl = new Soleil()
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
      width="1000" height="1000"
      >
      </canvas>
    );
  }
}

export default Q2;
