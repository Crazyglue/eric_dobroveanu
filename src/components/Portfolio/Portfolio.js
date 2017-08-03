import React, { Component } from "react";
import "./Portfolio.css";
import grblParser from "../../assets/images/grbl-parser.gif";
import transmission from "../../assets/images/transmission.gif";
import shuffletube1 from "../../assets/images/shuffletube1.png"
import shuffletube2 from "../../assets/images/shuffletube2.png"
import shuffletube3 from "../../assets/images/shuffletube3.png"

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
              <a href="https://play.google.com/store/apps/details?id=com.shuffletube&hl=en">
                <i className="fa fa-android" />&nbsp;
              </a>
            </p>
            <img className="img-responsive col-sm-4" src={shuffletube1} alt="" />
            <img className="img-responsive col-sm-4" src={shuffletube2} alt="" />
            <img className="img-responsive col-sm-4" src={shuffletube3} alt="" />

            <p>
              <more>
                ShuffleTube is a simple app that randomizes youtube videos and plays them for you. You can also shuffle videos by channel. Just add your favorite channels and switch them on to get random videos from those channels. You can also turn on categories at the same time! The app is currently on the google play store, and because its written in React-Native, will be on the apple app store soon.
              </more>
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p>
              GRBL-PARSER
              &nbsp;
              <a href="http://github.com/Crazyglue/grbl-parser">
                <i className="fa fa-github" />&nbsp;
              </a>
              <a href="https://runkit.com/5812b6009d0cb70013f5b92b/59179e16a8b8390011a55e1f">
                <i className="fa fa-codepen" />&nbsp;
              </a>
            </p>
            <p><img className="img-responsive" src={grblParser} alt="" /></p>

            <p>
              <more>
                A parsing library for
                &nbsp;
                <a href="http://github.com/gnea/grbl">grbl</a>
                , written in Javascript. It takes a string, output by grbl, and parses its status, setting, state information (and more!) from it. It supports many versions of grbl, and outputs this data in a structured, predictable format.
              </more>
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">

            <p>
              TRANSMISSION-FETCH
              &nbsp;
              <a href="http://github.com/Crazyglue/transmission-fetch">
                <i className="fa fa-github" />&nbsp;
              </a>
            </p>
            <p><img className="img-responsive" src={transmission} alt="" /></p>

            <p>
              <more>
                An API library to interface with
                &nbsp;
                <a href="https://transmissionbt.com/">transmission</a>
                .
                <br />
                <br />
              </more>
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
