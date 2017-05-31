import React, { Component } from 'react';
import './Skills.css';
import Skill from './Skill'
import skills from '../../constants/skills.json'

class Skills extends Component {

  _generateSkills() {
    return skills.map((skill, index) => <Skill skill={skill} key={index} />)
  }

  render() {
    return (
      <div id="skillswrap">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-md-offset-1">
              <h5>SKILLS</h5>
            </div>
          </div>
          <div className="col-md-9 col-md-offset-2 skill-list">
            {this._generateSkills()}
          </div>
        </div>
      </div>
    )
  }
}

export default Skills