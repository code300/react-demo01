import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  submit = () => {
      console.log('',this.state); //xiaogang-log
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h3>Form</h3>
        <input
          type="text"
          placeholder={username}
          value={username}
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder={password}
          value={password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}
