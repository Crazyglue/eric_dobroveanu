import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div className="container desc">
        <div className="row">

          <div className="col-md-2 col-md-offset-1">
            <h5>WORK</h5>
          </div>

          <div className="col-md-6">
            <p>
              <t>Software Engineer</t><br />
              <a target="_blank" href="http://inventables.com">Inventables</a><br />
            </p>
            <p>
              <more>
                Built, maintained and improved
                &nbsp;
                <a target="_blank" href="http://easel.inventables.com">Easel</a>
                , a web app which allows users to design and carve 3D objects using a <a target="_blank" href="https://www.inventables.com/technologies/x-carve">CNC milling machine</a>.
                I analyzed, planned and implemented a large range of features, from 2D drawing tools to machine control software.
                In addition, I maintained an e-commerce website, that sold CNC machines, materials and accessories. I also routinely pair programmed, fixed bugs, and collaborated with other departments to achieve strategic and tactical business goals
              </more>
            </p>
          </div>
          <div className="col-md-3">
            <p><sm>JULY 2015 - PRESENT</sm></p>
          </div>

          <div className="col-md-6 col-md-offset-3">
            <p>
              <t>IT Technical Support</t><br />
              The Uptown Shop <br />
            </p>
            <p>
              <more>
                Technical support staff for a brick and mortar store. I managed 3 e-commerce stores running Magento, and managed office computers -- automating backups and installing new hardware
              </more>
            </p>
          </div>
          <div className="col-md-3">
            <p><sm>JULY 2012 - JULY 2015</sm></p>
          </div>

          <div className="col-md-6 col-md-offset-3">
            <p>
              <t>Junior Web Tech</t><br />
              Yourlink Web Services <br />
            </p>
            <p>
              <more>
                I served as support staff for the main developers who created e-commerce websites, primarily by entering client product information into the newly created websites. I also assisted by creating and styling, static web pages.
              </more>
            </p>
          </div>
          <div className="col-md-3">
            <p><sm>OCTOBER 2008 - FEBRUARY 2009</sm></p>
          </div>
        </div>
        <br />
        <hr />
      </div>
    );
  }
}

export default Work;
