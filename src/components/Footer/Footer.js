import React, { Component } from 'react';

import './Footer.css'

class Footer extends Component {

  render() {
    return(
      <div id="footwrap">
        <div className="container">
          <div className="row">

            <div className="col-lg-2 col-lg-offset-1">
              <h5>CONTACT</h5>
            </div>
            <div className="col-lg-6">
              <p><t>Email</t><br/>
                william@blacktie.co <br/>
              </p>
              <p><t>Adress</t><br/>
                Some Ave. 987 <br/>
                Postal 23892 <br/>
                London, England. <br/>
              </p>
              <p><t>Phone</t><br/>
                +55 8933-2383 <br/>
              </p>
            </div>
            <div className="col-lg-3">
              <p><sm>SOCIAL LINKS</sm></p>
              <p>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-apple"></i></a>

              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer