import React, { Component } from 'react'
import socket from "./socket"

class Compter extends Component{

    state = {
        compter: 0
    }

    componentDidMount = e => {
        socket.emit("compter", 0)

        socket.on("compter", value => {
            this.setState(() => ({
                compter: value
            }))
        })

    }

    step = value => e => {
        e.preventDefault()
        socket.emit("compter", value)
    }

    reset = e => {
        e.preventDefault()
        socket.emit("reset")
    }

    render(){
        return (
            <div>
                <div>{this.state.compter}</div>
                <button onClick={this.step(1)}>+</button>
                <button onClick={this.step(-1)}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
    
}

export default Compter
