import React, { Component } from "react";
import { ClassComponentPage1, ClassComponentPage2 } from "./ClassComponentPage";
import { ThemeProvider } from "./Context";

//父子组件传参--->props
export class ContextPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red",
      },
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>父子组件传参---props</h3>
        <ClassComponentPage1 theme={theme} />
      </div>
    );
  }
}

// 跨层级组件传参--->Context
// 以下两个ThemeContext，ThemeProvider单独放在外面context.js文件管理
// const ThemeContext = React.createContext();
// const ThemeProvider = ThemeContext.Provider;
export class ContextPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red",
      },
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>跨层级组件传参---Context(Provider作为父组件用value属性传递数据)</h3>
        <ThemeProvider value={theme}>
          <ClassComponentPage2 />
        </ThemeProvider>
      </div>
    );
  }
}

// export { ContextPage1, ContextPage2 };
