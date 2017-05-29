import React, { Component } from 'react';

class Education extends Component {

  render() {
    return(
      <div className="container desc">
        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>EDUCATION</h5>
          </div>
          <div className="col-lg-6">
            <p><t>Master of Web Design</t><br/>
              St. Patrick University <br/>
              <i>3 Years Course</i>
            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>GRADUATING IN MAY 2014</sm><br/>
            <imp><sm>IN PROGRESS</sm></imp>
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><t>Degree of Web Developer</t><br/>
              Hastings University <br/>
              <i>2 Years Course</i>
            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>JUNE 2012</sm></p>
          </div>

        </div>
        <br />
        <hr />
      </div>
    )
  }
}

export default Education