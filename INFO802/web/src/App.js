import React, { Component } from 'react'
import Coordinate from "./Coordinate"
import Result from "./Result"
import sncf from "./sncf"
import {withRouter} from "react-router-dom"
import Datepicker from "./Datepicker"
import superagent from "superagent"
import Picker from "react-date-picker"

const key = "5cae67db-8c5c-4269-a2b3-935cf2c4656a"

class App extends Component{
    state = {
        source: "",
        dest: "",
        results: [], 
        errSource: false,
        errDest: false,
        time: new Date(),
        loading: false,
        distance: 0
    }

    componentDidMount = () => {
        const {pathname} = this.props.location
        const paths = pathname.split(/ *\/ */)
        const source = paths[1]
        const dest = paths[2]
        if(source) this.setState(() => ({source}))
        if(dest) this.setState(() => ({dest}))
    }

    onChangeDate = time => this.setState({ time })

    onFrom = e => {
        const source = e.target.value
        this.setState(() => ({source, errSource: false}))
    }

    onTo = e => {
        const dest = e.target.value
        this.setState(() => ({dest, errDest: false}))
    }

    onCancel = e => {
        e.preventDefault()
        this.setState(() => ({
            source: "",
            dest: "",
            errSource: false,
            errDest: false
        }))
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState(() => ({
            loading: true
        }))
        const {source, dest} = this.state
        if(!source.length){
            this.setState(() => ({errSource: true}))
        }
        if(!dest.length){
            this.setState(() => ({errDest: true}))
        }
        else{
            let p1 = sncf(source)
            let p2 = sncf(dest)
            Promise.all([p1, p2])
                .then(res => {
                    if(res[0].length === 2 & res[1].length === 2){
                        let p1 = new Coordinate(res[0][1], res[0][0])
                        let p2 = new Coordinate(res[1][1], res[1][0])
                        let distance = p1.distance(p2)
                        let price = distance / 9.8 * 2
                        console.log(p1.x, p2.x,p1.distance(p2))
                        this.setState(() => ({
                            distance
                        }))
                        this.props.history.push(`/${source}/${dest}`)
                    }
                    else{
                        if(res[0].length !== 2){
                            this.setState(() => ({errSource: true}))
                        }
                        if(res[1].length !== 2){
                            this.setState(() => ({errDest: true}))
                        }
                    }
                    const {time} = this.state

                    superagent
                        .post("http://train.yinyan.fr/journey")
                        .send({
                            source,
                            dest,
                            time
                        })
                        .end((err, res) => {
                            if(err) console.log(err)
                            else{
                                console.log(res.body)
                                this.setState(() => ({
                                    results: res.body
                                }))
                            }
                            this.setState(() => ({
                                loading: false
                            }))
                        })
                        })
                        .catch(err => {
                            console.log(err)
                        })


        }
    }

    render = () => {

        return (
            <div className="fyt">
            
          
          <div className="field">
            <label className="label">From</label>
            <div className="control has-icons-left has-icons-right">
              <input 
              className={
                  this.state.errSource
                  ? "input is-danger"
                  : "input"
              } 
              type="text" 
              placeholder="from" 
              value={this.state.source} 
              onChange={this.onFrom}
              />
              <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt"></i>
              </span>
              {
                  this.state.errSource
                  ? (
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  )
                  : ""
              }
            </div>
          </div>

          <div className="field">
            <label className="label">To</label>
            <div className="control has-icons-left has-icons-right">
              <input 
              className={
                this.state.errDest
                ? "input is-danger"
                : "input"
              } 
              type="text" 
              placeholder="to" 
              value={this.state.dest} 
              onChange={this.onTo}
              />
              <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt"></i>
              </span>
              {
                this.state.errDest
                ? (
                  <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )
                : ""
            }
            </div>
          </div>

          <div className="field">
          <div className="picker">
            <Picker onChange={this.onChangeDate} value={this.state.time} />
        </div>
          </div>
          
          
          <div className="field is-grouped">
            <div className="control">
              <button className={
                  this.state.loading
                  ? "button is-link is-loading"
                  : "button is-link"
              } onClick={
                  this.state.loading
                  ? e => {e.preventDefault()}
                  : this.onSubmit
              }
              disabled={this.state.loading}
              >Submit</button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={this.onCancel}>Cancel</button>
            </div>
          </div>
          <div>
            {
                this.state.distance > 0
                ? `Distance : ${this.state.distance}`
                : ""
            }
          </div>
            
          <div>
          {
            this.state.results
            && !!(this.state.results.length ) 
            && this.state.results.map((e, i) => {

                const {source, dest, distance} = this.state
                 return( 
                     <Result key={i}>{
                      {
                          source,
                          dest,
                          distance,
                          price: (e.price ? e.price.amount : "N/A"),
                          legs: e.legs
                      }
                  }</Result>
                  )
              })
          }
          </div>

            </div>
        )
    }
}

export default withRouter(App)