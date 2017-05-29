import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

  render() {
    return(
      <div id="intro">
        <div className="container">
          <div className="row">

            <div className="col-lg-2 col-lg-offset-1">
              <h5>ABOUT</h5>
            </div>
            <div className="col-lg-6">
              <p>I'm a software engineer and web developer with 2 years of professional experience. I'm interested in all kinds of software technologies, but my major focus is on fullstack web app development. I also have skills in other fields like CAD, fabcrication and web design.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default Intro