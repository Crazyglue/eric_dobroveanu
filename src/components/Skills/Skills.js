import React, { Component } from 'react';
import './Skills.css';
import { Doughnut } from 'react-chartjs'
import skills from '../../constants/skills.json'

const primaryColor = "#1abc9c";
const secondaryColor = "#ecf0f1";

class Skills extends Component {

  _generateSkillData(skill) {
    return [
      {
        value: skill.primaryValue,
        color: primaryColor
      },
      {
        value: skill.secondaryValue,
        color: secondaryColor
      }
    ]
  }

  _generateSkills() {
    console.log("skills", skills)
    return skills.map((skill, index) => {
      let skillData = this._generateSkillData(skill)

      return (
        <div className="col-md-4 centered">
          <p>{skill.name}</p>
          <br />
          <Doughnut options={ { showTooltips: false } } height="130" width="130" data={skillData} />

          <hr />
        </div>
      )
    })
  }

  render() {
    return(
      <div id="skillswrap">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-md-offset-1">
              <h5>SKILLS</h5>
            </div>
          </div>
          <div className="col-md-9 col-md-offset-2">
            {this._generateSkills()}
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default Skills