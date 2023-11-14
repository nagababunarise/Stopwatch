import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeRunning: false,
    timeSecondsAndMinutes: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onStartTime = () => {
    this.timeInterval = setInterval(this.tick, 1000)
    this.setState({timeRunning: true})
  }

  onStopTime = () => {
    clearInterval(this.timeInterval)
    this.setState({timeRunning: false})
  }

  onResetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({timeRunning: false, timeSecondsAndMinutes: 0})
  }

  tick = () => {
    this.setState(prevState => ({
      timeSecondsAndMinutes: prevState.timeSecondsAndMinutes + 1,
    }))
  }

  renderSeconds = () => {
    const {timeSecondsAndMinutes} = this.state
    const seconds = Math.floor(timeSecondsAndMinutes % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeSecondsAndMinutes} = this.state
    const minutes = Math.floor(timeSecondsAndMinutes / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {timeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-card">
          <div className="time-name">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="timer"
              className="image"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <p className="time">{time}</p>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onStartTime}
              disabled={timeRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button button2"
              onClick={this.onStopTime}
            >
              Stop
            </button>
            <button
              type="button"
              className="button button3"
              onClick={this.onResetTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
