import React, { Component } from 'react'
import logo from "./logo.jpg"

class Nav extends Component{

    render = () => (
    <div>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo} width="112" height="28" />
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

    </div>
   </div>
        </nav>
        </div>
    )
}

export default Nav
