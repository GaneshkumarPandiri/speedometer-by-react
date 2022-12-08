// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevstate => ({speed: prevstate.speed + 10}))
    }
  }

  onApplyBreaks = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevstate => ({speed: prevstate.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image-style"
        />
        <h1>
          Speed is <span>{speed}mph</span>
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="button1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button
            type="button"
            className="button2"
            onClick={this.onApplyBreaks}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
