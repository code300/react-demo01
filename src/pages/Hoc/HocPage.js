import React, { Component } from "react";

// hoc---定义：是个函数，参数为组件,返回值也是个组件，支持链式调用

// 第一步：创建一个函数
const fun = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

// 第二步：创建一个function/class组件
function Child(props) {
  return <div className="border">child---{props.name}</div>;
}

// 针对class组件可以装饰器方式调用,执行顺序从上往下(写两个就是调两次)
@fun
@fun
// 第二步：创建一个function/class组件
class Child2 extends Component {
  render() {
    return <div className="border">child---{this.props.name}</div>;
  }
}

// 第三步：调用函数fun，将函数return返回的组件保存起来，组件名Fun要大写
// const Fun = fun(Child);
const Fun = fun(fun(Child));

// 第四步：class组件当中使用组件
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Fun name="参数" />
        <Child2 name="装饰器参数" />
      </div>
    );
  }
}


