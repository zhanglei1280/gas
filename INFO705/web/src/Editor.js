import React, { Component } from 'react'
import socket from "./socket"
import xss from "xss"

class Editor extends Component{
    state = {
        text: null,
        users: []
    }

    componentDidMount = e => {
        socket.on("text", text => {
            this.setState(() => ({
                text
            }))
        })

        socket.on("users", users => {
            this.setState(() => ({
                users
            }))
        })
    }

    write = e => {
        const {value} = e.target
        this.setState(() => ({
            text: xss(value)
        }))
        socket.emit("write", xss(value))
    }

    render(){
        return (
            <div>
                <textarea
                    onChange={this.write}
                    value={this.state.text}
                >
                </textarea>
                <div>Userlist</div>
                <div>
                {this.state.users.map((e, i) => (
                    <div key={i}>{e}</div>
                ))}
                </div>
            </div>
        )
    }
}

export default Editor
