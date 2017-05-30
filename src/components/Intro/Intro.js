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
              <p>I'm a software engineer with dynamic knowledge and the ability to independently or collaboratively solve complex problems. I'm interested in all kinds of tech, but my major focus is on fullstack web app development. I also have skills in other fields like CAD, fabcrication and web design.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default Intro