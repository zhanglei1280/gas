import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import soap from "soap"

class App extends Component {

  state = {
    distance: 0
  }

  componentDidMount = () => {
    const url = "http://localhost:9000/Distance?wsdl"
    // const args = {
    //     x1: 1.2342,
    //     y1: 4.564,
    //     x2: 5.2354,
    //     y2: 9.345
    // }

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
        <div>
          {
            this.state.distance
          }
        </div>
      </div>
    );
  }
}

export default App;
