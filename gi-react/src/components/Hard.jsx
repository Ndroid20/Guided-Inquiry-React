import BasicInfo from "./Medium";
import React, { Component } from "react";

export default class BasicInfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: "Anthony", age: 21, dateOfBirth: "07/01/2001" },
        { name: "Bruno", age: 21, dateOfBirth: "07/01/2001" },
        { name: "Calvin", age: 21, dateOfBirth: "07/01/2001" },
        { name: "Dennis", age: 21, dateOfBirth: "07/01/2001" },
      ],
    };
  }
  render() {
    return;
    <div>
      <BasicInfo />
      {personalbar.map((person) => {
        return <BasicInfo data={person} />;
      })}
    </div>;
  }
}
