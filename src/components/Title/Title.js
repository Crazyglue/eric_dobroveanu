import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

  render() {
    return(
      <div id="headerwrap">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-12">
              <h1>Eric Dobroveanu</h1>
              <h3>Software Engineer | eric.dobroveanu@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Title