import React, { Component } from 'react'
import moment from "moment"

class Result extends Component{

    render = () => {

        const {source, dest, distance, price, legs} = this.props.children

        return (
            <div className="res">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                    {source}&nbsp;<i className="fas fa-chevron-right"></i>&nbsp;{dest}
                    </p>
                    <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="content">
                        {
                            legs.map((e, i) => (
                                <div key={i}>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <div className="level-item">
                                        <h1>
                                        {
                                            moment(e.departure).format("HH:mm")
                                        }
                                        </h1>
                                        </div>
                                    </div>

                                    <div className="level-right">
                                        <div className="level-item">
                                            <h1>{price} €</h1>
                                        </div>
                                    </div>
                                
                                </nav>
                            </div>
                                

                            ))
                        }
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Reserve your ticket</a>
                    <a href="#" className="card-footer-item">See on map</a>
                </footer>
                </div>
            </div>
        )
    }
}

export default Result
