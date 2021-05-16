import React, { Component } from "react";
import { ClassComponentPage1, ClassComponentPage2 } from "./ClassComponentPage";
import ConsumerPage from "./ConsumerPage";
import { ThemeProvider } from "./Context";
import FunctionComponentPage from "./FunctionComponentPage";

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
				<h3>props父子组件传参---</h3>
				<ClassComponentPage1 theme={theme} />
			</div>
		);
	}
}

// 跨层级 类组件传参--->Context
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
				<h3>
					Context跨层级类组件传参---Context(Provider作为父组件用value属性传递数据)
				</h3>
				<ThemeProvider value={theme}>
					<ClassComponentPage2 />
				</ThemeProvider>
			</div>
		);
	}
}
// export { ContextPage1, ContextPage2 };

// 跨层级 function组件传参--->Context
// 以下两个ThemeContext，ThemeProvider单独放在外面context.js文件管理
// const ThemeContext = React.createContext();
// const ThemeProvider = ThemeContext.Provider;
export class ContextPage3 extends Component {
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
				<h3>
					Context跨层级function组件传参---(Provider作为父组件用value属性传递数据)
				</h3>
				<ThemeProvider value={theme}>
					<FunctionComponentPage />
				</ThemeProvider>
			</div>
		);
	}
}

// ConsumerPage
export class ContextPage4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: {
				themeColor: "red",
			},
		};
	}
	changeColor = () => {
		const { themeColor } = this.state.theme;
		this.setState({
			theme: { themeColor: themeColor === "red" ? "green" : "red" },
		});
	};
	render() {
		const { theme } = this.state;

		return (
			<div>
				<h3>
					Consumer跨层级组件传参---Context(Provider作为父组件用value属性传递数据
					给子组件)
				</h3>
				<button onClick={this.changeColor}>变色</button>
				<ThemeProvider value={theme}>
					<ConsumerPage />
				</ThemeProvider>
			</div>
		);
	}
}
// export { ContextPage1, ContextPage2, ContextPage3, ContextPage4 };
