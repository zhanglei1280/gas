import React, { Component } from 'react';
import Q1 from "./Q1"


class App extends Component {

  componentDidMount = () => {
    if(!window.WebGLRenderingContext){
      alert("Guess even babel-polyfill doesn't save IE.")
    }
  }

  render() {
    return (
      <Q1 />
    )
  }
}

export default App;
