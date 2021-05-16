import React, { Component } from "react";

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  // 组件挂载完成后绑定事件监听
  componentDidMount() {
    document.getElementById("test").addEventListener("click", this.setCounter);
  }

  changeValue = (v) => {
    this.setState({
      counter: this.state.counter + v,
    });
    console.log("counter", this.state.counter); //log-xiaogang
  };

  setCounter = () => {
    // setTimeout中setState同步更新state数据
    setTimeout(() => {
      this.changeValue(1);
    }, 0);
  };
  render() {
    return (
      <div>
        <h3>原生事件和setTimeout中setState同步更新state数据</h3>
        {/* 原生事件中setState同步更新state数据 */}
        <button id="test">{this.state.counter}</button>
      </div>
    );
  }
}
