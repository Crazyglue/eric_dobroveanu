import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div id="section-topbar">
        <div id="topbar-inner">
          <div className="container">
            <div className="row">
              <div className="dropdown">
                <ul id="nav" className="nav">
                  <li className="menu-item">
                    <a className="smoothScroll" href="#about" title="About">
                      <i className="fa fa-user" />
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="smoothScroll" href="#work" title="Work">
                      <i className="fa fa-briefcase" />
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="smoothScroll" href="#skills" title="Skills">
                      <i className="fa fa-wrench" />
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="smoothScroll"
                      href="#side-projects"
                      title="Side Projects"
                    >
                      <i className="fa fa-file" />
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="smoothScroll" href="#contact" title="Contact">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="clear" />
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default NavBar;
