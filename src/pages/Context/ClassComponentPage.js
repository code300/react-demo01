import React, { Component } from "react";
import { ThemeContext } from "./Context";

// 父子组件传参--->props
export class ClassComponentPage1 extends Component {
  render() {
    const { themeColor } = this.props.theme;
    // console.log("this", this); //xiaogang-log
    // console.log("themeColor", themeColor); //xiaogang-log
    return (
      <div>
        <h3 className={themeColor}>ClassComponentPage</h3>
      </div>
    );
  }
}

// 跨层级组件传参--->Context
export class ClassComponentPage2 extends Component {
  // static作用：挂载到当前的类组件上
  static contextType = ThemeContext;
  
  render() {
    const { themeColor } = this.context;
    console.log("this", this); //xiaogang-log
    console.log('ThemeContext',ThemeContext); //xiaogang-log
    console.log('context',this.context); //xiaogang-log
    return (
      <div>
        <h3 className={themeColor}>ClassComponentPage</h3>
      </div>
    );
  }
}

