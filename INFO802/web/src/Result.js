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
                <nav className="card-content">
                    <nav className="content">
                    {legs.length > 1 ? `${legs.length} correspondances` : "Direct"}
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <div className="level-item">
                        {
                            // legs.map((e, i) => (
                            //     <div key={i}>
                            //             <h1>
                            //             {
                            //                 moment(e.departure).format("HH:mm")
                            //             }
                            //             &nbsp;
                            //             {
                            //                 i < legs.length - 1
                            //                 ? <i className="fas fa-arrow-right"></i>
                            //                 : ""
                            //             }
                            //             &nbsp;
                            //             </h1>  
                            //     </div>
                            // ))
                            <h1>{moment(legs[0].departure).format("HH:mm")}</h1>
                        }
                        </div>
                        </div>
                        <div className="level-right">
                                        <div className="level-item">
                                            <h1>{price} €</h1>
                                        </div>
                                    </div>
                    </nav>
                </nav>
                </nav>
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
