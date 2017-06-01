import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="container desc">
        <div className="row">
          <div className="col-md-2 col-md-offset-1">
            <h5>EDUCATION</h5>
          </div>
          <div className="col-md-6">
            <p>
              <t>Software Development</t><br />
              College of DuPage <br />
              <i>2 Year Course</i>
            </p>
          </div>
          <div className="col-md-3">
            <p><sm>DECEMBER 2015</sm></p>
          </div>

          <div className="col-md-6 col-md-offset-3">
            <p>
              <t>Certificate of Computer Information Systems</t><br />
              C++ Language<br />
              College of DuPage <br />
              <i>1 Year Course</i>
            </p>
          </div>
          <div className="col-md-3">
            <p><sm>MAY 2015</sm></p>
          </div>

          <div className="col-md-6 col-md-offset-3">
            <p>
              <t>Certificate of Computer Information Systems</t><br />
              Java Language<br />
              College of DuPage <br />
              <i>1 Year Course</i>
            </p>
          </div>
          <div className="col-md-3">
            <p><sm>MAY 2015</sm></p>
          </div>

        </div>
        <br />
        <hr />
      </div>
    );
  }
}

export default Education;
