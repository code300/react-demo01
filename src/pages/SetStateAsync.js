import React, { Component } from "react";

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // setState异步批量更新state的数据
  changeValue = (v)=>{
    this.setState({
      counter: this.state.counter + v
    })
    console.log(v,'log-xiaogang'); //log-xiaogang
  }

  // 合成事件
  setCounter = () => {
    this.changeValue(1);
  };

  render() {
    return (
      <div>
        <h3>合成事件中setState异步更新state数据</h3>
        {/* 合成事件中setState异步更新state数据 */}
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    );
  }
}
