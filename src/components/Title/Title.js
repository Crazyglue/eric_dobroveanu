import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

  render() {
    return(
      <div id="headerwrap">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-12">
              <h1>William T. Kelvin</h1>
              <h3>Web Designer | kelvin@blacktie.co</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Title