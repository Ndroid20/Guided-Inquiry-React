import React, { Component } from "react";

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: props.name,
        age: props.age,
        dateOfBirth: props.dateOfBirth,
      },
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.person.name}</h1>
        <h3>{this.state.person.age}</h3>
        <h3> {this.state.person.age} </h3>
      </div>
    );
  }
}

export default BasicInfo;
