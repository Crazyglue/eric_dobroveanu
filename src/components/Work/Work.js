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
            <p><t>Front-end Developer</t><br/>
              Black Tie Corp. <br/>
            </p>
            <p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>AUGUST 2012 - CURRENT</sm></p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><t>Web Designer - Intern</t><br/>
              Onassis Ltd. <br/>
            </p>
            <p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>JUNE 2010 - JULY 2012</sm></p>
          </div>
        </div>
        <br />
        <hr />
      </div>

    )
  }
}

export default Work