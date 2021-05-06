import React, { Component } from "react";
import Top from "./Top";
import Bottom from "./Bottom";

export default class Layout extends Component {
  componentDidMount() {
    const { title = "商城" } = this.props;
    document.title = title;
    // console.log('document',document); //log-xiaogang
    
  }

  render() {
    const { children, isShowTop, isShowBottom } = this.props;
    console.log("children", children); //log-xiaogang

    return (
      <div>
        {isShowTop && <Top></Top>}
        {/* {this.props.children} */}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>按钮</button>
        {isShowBottom && <Bottom></Bottom>}
      </div>
    );
  }
}
