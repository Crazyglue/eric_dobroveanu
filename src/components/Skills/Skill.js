import React, { Component } from "react";
import "./Skill.css";
import { Doughnut } from "react-chartjs";

const primaryColor = "#1abc9c";
const secondaryColor = "#ecf0f1";

class Skill extends Component {
  render() {
    var skillData = [
      {
        value: this.props.skill.primaryValue,
        color: primaryColor
      },
      {
        value: this.props.skill.secondaryValue,
        color: secondaryColor
      }
    ];

    return (
      <div className="col-md-4 col-sm-6 centered skill">
        <p>{this.props.skill.name}</p>
        <Doughnut
          options={{ showTooltips: false }}
          height="130"
          width="130"
          data={skillData}
        />
      </div>
    );
  }
}

export default Skill;
