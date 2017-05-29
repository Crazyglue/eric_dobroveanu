import React, { Component } from 'react';
import port01 from '../../assets/images/port01.jpg';
import port02 from '../../assets/images/port02.jpg';
import port03 from '../../assets/images/port03.jpg';

class Portfolio extends Component {

  render() {
    return(
      <div className="container desc">
        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>PORTFOLIO</h5>
          </div>
          <div className="col-lg-6">
            <p><img className="img-responsive" src={port01} alt="" /></p>
          </div>
          <div className="col-lg-3">
            <p>CANALS OF ENGLAND</p>
          <p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
            <sm><i className="fa fa-tag"></i> design</sm></more>
          </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><img className="img-responsive" src={port02} alt="" /></p>
          </div>
          <div className="col-lg-3">
              <p>SANKEY</p>
            <p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
              <sm><i className="fa fa-tag"></i> front-end</sm></more>
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><img className="img-responsive" src={port03} alt="" /></p>
          </div>
          <div className="col-lg-3">
              <p>WE GROW</p>
            <p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
              <sm><i className="fa fa-tag"></i> web design</sm></more>
            </p>
          </div>

        </div>
        <br />
        <br />
      </div>
    )
  }
}

export default Portfolio