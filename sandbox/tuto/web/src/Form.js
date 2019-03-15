import React, { Component } from 'react'
import Box from "./Box"
import {connect} from "react-redux"

class Form extends Component{
    state = {
        start: 1,
        end: 50
    }

    onInput = where => e => {
        const value = parseInt(e.target.value)
        if(where == "start"){
            this.setState(() => ({start: value}))
        }else{
            this.setState(() => ({end: value}))
        }
    }

    onOK = e => {
        e.preventDefault()
        const {start, end} = this.state
        var box = new Box(start, end)
        this.props.dispatch({
            type: "SETBOX",
            data: {
                start,
                end,
                box
            }
        })
    }

    render = () => (
        <div>
            <div className="field">
                <label className="label">Start</label>
                <div className="control">
                <input 
                    className="input"
                    type="text" 
                    value={this.state.start}
                    onChange={this.onInput("start")}          
                />
                </div>
            </div>

            <div className="field">
                <label className="label">End</label>
                <div className="control">
                <input 
                    className="input"
                    type="text" 
                    value={this.state.end}
                    onChange={this.onInput("end")}          
                />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button
                     className="button is-link"
                     onClick={this.onOK}
                     >ok</button>
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    box: state.box
})

export default connect(mapStatetoProps)(Form)
