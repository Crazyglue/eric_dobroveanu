import React, { Component } from 'react';
import './Intro.css';
import portrait from '../../assets/images/Eric2.jpg'

class Intro extends Component {

  render() {
    return(
      <div id="intro">
        <div className="container">
          <div className="row">

            <div className="col-sm-3 centered">
              <img className="portrait-image" src={portrait} alt="portrait" />
            </div>

            <div className="col-sm-9">
              <h5>ABOUT</h5>
              <p>Software engineer with dynamic knowledge and the ability to independently or collaboratively solve complex problems. Diverse field of interest, specialization in fullstack web app development and design. Experience designing, prototyping and manufacturing physical products using both digital manufacturing and traditional fabrication techniques.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default Intro