import React, { Component } from 'react';
import CountDown from "react-countdown-clock"

import shuffle from "shuffle-array"

class Cache extends Component {

  wordlist = []

  state = {
    word: [],
    counter: 30,
    timeup: false,
    start: false,
    end: false
  }

  componentDidMount() {
    this.wordlist = shuffle(this.props.wordlist)

    this.setState(() => ({
      word: this.wordlist.shift()
    }))
  }

  onStart = e => {
    e.preventDefault()
    this.setState({
      start: true
    })
  }

  onTimeup = e => {
    this.setState(() => ({
      timeup: true
    }))
  }

  onNewWord = e => {
    const word = this.wordlist.shift()
    if (word) {
      this.setState(() => ({
        word,
        counter: 30,
        timeup: false,
        start: false
      }))
    }
    if(this.wordlist.length <= 0){
      this.setState(() => ({
        end: true
      }))
    }
  }

  render() {
    return (
      <div>
        <div className="word">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{this.state.word[0]}</h1>
                <h1 className="title">{this.state.word[1]}</h1>
              </div>
            </div>
          </section>
        </div>
        <div className="buttons">
          <div className="button is-text my-button">Reste: {this.wordlist.length}</div>
          <div className={
            this.state.timeup
              ? "button is-warning my-button"
              : "button is-primary my-button"
          } onClick={this.onStart}>{
              this.state.timeup
                ? "Time's up"
                : "Start"
            }</div>
          <div className="button is-text" onClick={this.onNewWord}>
          {
            this.state.end
            ? "End"
            : "Next"
          }
          </div>
        </div>

        <div className="clock">
          {
            this.state.start
              ? <CountDown seconds={this.state.counter} color={"#20B2AA"} size={300} onComplete={this.onTimeup} />
              : ""
          }
        </div>
      </div>
    )
  }
}

export default Cache
