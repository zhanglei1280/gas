import React, { Component } from 'react'
import Box from "./Box"
import {connect} from "react-redux"

class App extends Component{
    state = {
        num: 0,
        locked: false
    }


    add = () => {
        this.setState(() => ({locked: true}))
        var {start, end, box} = this.props.box
        if(end - start < 25){
            end = start + 25
        }
        var list = (new Box(start, end)).getList()
        var count = 1
        var animation = setInterval(() => {
            this.setState(() => ({num: list.shift()}))
            count++
            if(count >= 20){
                clearInterval(animation)
                // critical
                setTimeout(() => {
                    this.setState(() => ({
                        num: box.pick(),
                        locked: false
                    }))
                }, 0)
            }
        }, 50)
    }

    render = () => {
        return (
            <div>
            {
                this.props.box
                ? (
                    <div>
                        <h1 className="title">{this.state.num}</h1>
                        <div className="field">
                            <div>{
                                this.state.locked
                                ? "locked"
                                : "not locked"
                            }</div>
                            <div className="control">
                            <button
                            className="button is-primary"
                            onClick={
                                this.state.locked
                                ? null
                                : this.add
                            }
                            disabled={this.state.locked}
                            >Submit</button> 
                            </div>
                        </div>
                    </div>
                )
                : ""
            }

            </div>
        )
    }
}

const mapStatetoProps = state => ({
    box: state.box
})

export default connect(mapStatetoProps)(App)
