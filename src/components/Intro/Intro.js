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
              <p>I'm web designer & front-end developer with 7 years of professional experience. I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces. I also have skills in other fields like branding, icon design or web development.</p>
            </div>
            <div className="col-lg-3">
              <p><a href="#"><i className="icon-file"></i></a> <sm>DOWNLOAD PDF</sm></p>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default Intro