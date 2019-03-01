import React, { Component } from 'react';
import Q1 from "./Q1"


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
    e.preventDefault()
    console.log("Hello")
  }

  render() {
    return (
      <div onContextMenu={this.onRight}>
        <Q1 />
      </div>
    )
  }
}

export default App;
