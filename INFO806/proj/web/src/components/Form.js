import React, { Component } from 'react'
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

class Form extends Component{

    onSubmit = e => {
        e.preventDefault()
        html2canvas(document.querySelector(".myform"))
            .then(canvas => {
                let imgData = canvas.toDataURL()
                let doc = new jsPDF()
                console.log(imgData);
                doc.setFontSize(40);
                doc.text(30, 20, `JavaScript c'est cool`);
                doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
                doc.output('datauri');
            })

    }

    render = () => {

        return (
            <div className="myform">
          
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="Username" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input className="input" type="email" placeholder="Email input" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Winter Sports</option>
                  <option>Summer Sports</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                <span>&nbsp;&nbsp;</span>
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          
          <div className="field is-grouped">
            <div className="control">
              <button onClick={this.onSubmit} className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
            </div>
        )
    }
}

export default Form
