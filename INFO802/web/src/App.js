import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import soap from "soap"

class App extends Component {

  componentDidMount = () => {
    const url = "http://localhost:9000/Distance?wsdl"
    const args = {
        x1: 3.14,
        y1: 1.717,
        x2: 1.475,
        y2: 6.3435
    }

    soap.createClientAsync(url)
    .then(client => {
        return client.getDistanceAsync(args)
    })
    .then(distance => {
        console.log(distance)
    })
    .catch(err => {
        console.log(err)
    })


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
