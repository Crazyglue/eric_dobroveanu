import React, { Component } from 'react';
import './Intro.css';
import Eric from '../../assets/images/Eric2.jpg'

class Intro extends Component {

  render() {
    return(
      <div id="intro">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <img style={ { height: 150 } } src={Eric} alt="me" />
            </div>
            <div className="col-md-9">
              <h5>ABOUT</h5>
              <p>Software engineer with dynamic knowledge and the ability to independently or collaboratively solve complex problems. Diverse field of interest, specialization in fullstack web app development and design. Experience prototyping and manufacturing realworld products using CAD, digital manufacturing techniques and traditional fabrication techniques.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default Intro