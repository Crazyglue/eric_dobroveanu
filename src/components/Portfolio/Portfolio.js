import React, { Component } from "react";
import "./Portfolio.css";
import grblParser from "../../assets/images/grbl-parser.gif";
import transmission from "../../assets/images/transmission.gif";
import shuffletube from "../../assets/images/shuffletube.png"

class Portfolio extends Component {
  render() {
    return (
      <div className="container desc">

        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>SIDE-PROJECTS</h5>
          </div>

          <div className="col-lg-6">
            <p>
              ShuffleTube
              &nbsp;
              <a href="https://play.google.com/store/apps/details?id=com.shuffletube&hl=en" target="_blank">
                <i className="fa fa-android" />
              </a>
            </p>
            <p>
              <img className="img-responsive" src={shuffletube} alt="" />
            </p>

            <p>
              <more>
                {"ShuffleTube is a simple app that randomizes youtube videos and plays them for you. You can also shuffle videos by channel. Just add your favorite channels and switch them on to get random videos from those channels. You can also turn on categories at the same time! The app is currently on the google play store, and because its written in React-Native, will be on the apple app store soon (and github!)"}
              </more>
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p>
              GRBL-PARSER
              &nbsp;
              <a href="http://github.com/Crazyglue/grbl-parser" target="_blank">
                <i className="fa fa-github" />&nbsp;
              </a>
              <a href="https://runkit.com/5812b6009d0cb70013f5b92b/59179e16a8b8390011a55e1f" target="_blank">
                <i className="fa fa-codepen" />
              </a>
            </p>
            <p><img className="img-responsive" src={grblParser} alt="" /></p>

            <p>
              <more dangerouslySetInnerHTML={{ __html: 'A parsing library for <a href="http://github.com/gnea/grbl">grbl</a>, written in Javascript. It takes a string, output by grbl, and parses its status, setting, state information (and more!) from it. It supports many versions of grbl, and outputs this data in a deterministic way.' }} />
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">

            <p>
              TRANSMISSION-FETCH
              &nbsp;
              <a href="http://github.com/Crazyglue/transmission-fetch" target="_blank">
                <i className="fa fa-github" />&nbsp;
              </a>
            </p>
            <p><img className="img-responsive" src={transmission} alt="" /></p>

            <p>
              <more dangerouslySetInnerHTML={{ __html: 'An API library to interface with <a target="_blank" href="https://transmissionbt.com/">transmission</a>.' }} />
            </p>
          </div>

        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Portfolio;
