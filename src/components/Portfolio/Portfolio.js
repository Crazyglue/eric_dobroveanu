import React, { Component } from 'react';
import port01 from '../../assets/images/grbl-parser.gif';
import port02 from '../../assets/images/port02.jpg';
import port03 from '../../assets/images/port03.jpg';

class Portfolio extends Component {

  render() {
    return(
      <div className="container desc">

        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>SIDE-PROJECTS</h5>
          </div>
          <div className="col-lg-3">
            <p>GRBL-PARSER <a href="http://github.com/Crazyglue/grbl-parser"><i className="fa fa-github"></i> </a>
            <a href="https://runkit.com/5812b6009d0cb70013f5b92b/59179e16a8b8390011a55e1f"><i className="fa fa-codepen"></i> </a>

            </p>
          </div>
          <div className="col-lg-6">
            <p><img className="img-responsive" src={port01} alt="" /></p>
          </div>
          <div className="col-lg-3">
            <p><more>A parsing library for <a href="http://github.com/gnea/grbl">grbl</a>, written in Javascript. It takes a string, output by grbl, and parses its status, setting, state information (and more!) from it. It supports many versions of grbl, and outputs this data in a structured, predictable format.<br/><br/>
            </more>
            </p>
          </div>
        </div>

        <br />
        <br />
      </div>
    )
  }
}

export default Portfolio