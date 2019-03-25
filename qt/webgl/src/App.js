import React, { Component } from 'react';
import Q2 from "./Q2"


class App extends Component {

  componentDidMount = () => {
    if(!window.WebGLRenderingContext){
      alert("Guess even babel-polyfill doesn't save IE.")
    }

    document.querySelector("body")
      .addEventListener("keydown", e => {
        console.log(e.keyCode)
      })
  }

  onRight = e => {
    if(e) e.preventDefault()
    console.log("Hello")
  }

  render() {
    return (
      <div onContextMenu={this.onRight}>
        <h1>Webgl Render Test</h1>
        <Q2 />
      </div>
    )
  }
}

export default App;
