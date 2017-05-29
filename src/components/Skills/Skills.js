import React, { Component } from 'react';
import './Skills.css';
import { Doughnut } from 'react-chartjs'

var javascriptData = [
  {
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
]

class Skills extends Component {
  _mouseOver(e) {
    console.log("mouseOver", e)
  }

  _mouseOut(e) {
    console.log("mouseOut", e)
  }

  render() {
    return(
      <div id="skillswrap">
        <div className="container">
          <div className="row">
              <div className="col-lg-2 col-lg-offset-1">
                <h5>SKILLS</h5>
              </div>
              <div className="col-lg-3 centered">
                <canvas id="javascript" height="130" width="130"></canvas>
                <p>Javascript</p>
                <br />
                <Doughnut data={javascriptData} onMouseOver={this._mouseOver} onMouseOut={this._mouseOut} />
              </div>

          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default Skills