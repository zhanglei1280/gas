import React, { Component } from 'react';
import GL from "./GL"
import "./css/basic.css"

class Q1 extends Component {

  componentDidMount = () => {
    const gl = new GL()
    gl.run()
  }

  render() {
    return (
      <canvas 
      id="webglcanvas"
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
