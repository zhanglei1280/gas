import React, { Component } from 'react';
import Cube from "./Cube"
import Sphere from "./Sphere"
import Soleil from "./Soleil"
import "./css/basic.css"

class Q1 extends Component {

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
      width="1200" height="1200"
      >
      </canvas>
    );
  }
}

export default Q1;
