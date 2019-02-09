import React, { Component } from 'react'

import Picker from "react-date-picker"
class Datepicker extends Component{

    state = {
        date: new Date()
    }

    onChange = date => this.setState({ date })

    render = () => (
        <div className="picker">
            <Picker onChange={this.onChange} value={this.state.date} />
        </div>
    )
}

export default Datepicker
