import React, { Component } from 'react';
import grblParser from '../../assets/images/grbl-parser.gif';
import transmission from '../../assets/images/transmission.gif';

class Portfolio extends Component {

  render() {
    return(
      <div className="container desc">

        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>SIDE-PROJECTS</h5>
          </div>

          <div className="col-lg-6">
            <p>GRBL-PARSER <a href="http://github.com/Crazyglue/grbl-parser"><i className="fa fa-github"></i> </a>
              <a href="https://runkit.com/5812b6009d0cb70013f5b92b/59179e16a8b8390011a55e1f"><i className="fa fa-codepen"></i> </a>
            </p>
            <p><img className="img-responsive" src={grblParser} alt="" /></p>

            <p><more>A parsing library for <a href="http://github.com/gnea/grbl">grbl</a>, written in Javascript. It takes a string, output by grbl, and parses its status, setting, state information (and more!) from it. It supports many versions of grbl, and outputs this data in a structured, predictable format.<br/><br/>
            </more>
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">

            <p>TRANSMISSION-FETCH <a href="http://github.com/Crazyglue/transmission-fetch"><i className="fa fa-github"></i> </a>
            </p>
            <p><img className="img-responsive" src={transmission} alt="" /></p>

            <p><more>
              An API library to interface with <a href="https://transmissionbt.com/">transmission</a>.<br/><br/>
            </more></p>
          </div>

        </div>

        <br />
        <br />
      </div>
    )
  }
}

export default Portfolio