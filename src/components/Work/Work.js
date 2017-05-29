import React, { Component } from 'react';

class Work extends Component {

  render() {
    return(
      <div className="container desc">
        <div className="row">

          <div className="col-lg-2 col-lg-offset-1">
            <h5>WORK</h5>
          </div>

          <div className="col-lg-6">
            <p><t>Software Engineer</t><br/>
              <a href="http://inventables.com">Inventables</a><br/>
            </p>
            <p><more>Built, maintained and improved <a href="http://easel.inventables.com">Easel</a>, a web app which allowed users to design and carve 3D objects using a CNC milling machine.
            I analyzed, planned and implemented a large range of features, from 2D drawing tools to machine control software.
            I also routinely pair programmed, fixed bugs, and collaborated with other departments to achieve strategic and tactical business goals</more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>JULY 2015 - PRESENT</sm></p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><t>IT Technical Support</t><br/>
              The Uptown Shop <br/>
            </p>
            <p><more>Technical support staff for a brick and mortor store. I managed 3 e-commerce stores running Magento, and managed office computers -- automating backups and installing new hardware</more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>JULY 2012 - JULY 2015</sm></p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><t>Junior Web Tech</t><br/>
              Yourlink Web Services <br/>
            </p>
            <p><more>I served as support staff for the main developers, creating e-commerce websites, primarily by entering client product information into the newly created websites. I also assisted by creating and styling smaller, static webpages.</more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>OCTOBER 2008 - FEBRUARY 2009</sm></p>
          </div>
        </div>
        <br />
        <hr />
      </div>

    )
  }
}

export default Work