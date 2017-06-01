import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footwrap">
        <div className="container">
          <div className="row">

            <div className="col-md-2 col-md-offset-1">
              <h5 className="uppercase">CONTACT</h5>
            </div>
            <div className="col-md-4">
              <p className="section-header">Email</p>
              <p>eric.dobroveanu@gmail.com</p>

              <p className="section-header">Address</p>
              <p>Chicago, IL</p>
            </div>
            <div className="col-md-1">
              <a href="https://github.com/Crazyglue/eric_dobroveanu">
                <i className="fa fa-github fa-4x" />
              </a>
            </div>
            <div className="col-md-4">
              <p>This site's source code is on github, check it out!</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;
