import React, { Component } from "react";
import { RouterContext } from "./Context";
import matchPath from "./matchPath";

export default class Route extends Component {
	render() {
		return (
			<RouterContext.Consumer>
				{context => {
					const location = context.location;

					const { path, children, component, render } = this.props;
					// window.location 有兼容问题， 所以用react-router-dom里的history库里面的location--从BrowserRouter创建传递过来的
					// const match = window.location.pathname === path;
					// 判断Route中是否传递path值 有则用之 无则用 context传递下来的match
					// const match = path ? location.pathname === path : context.match;
					// matchPath()是自定义的正则表达式函数（path匹配规则） 这里直接导入react-router-dom源码里的文件
					const match = path
						? matchPath(location.pathname, this.props)
						: context.match;
					const props = {
						...context,
						match,
					};
					// match => 渲染三者之一 优先级：children(function或者节点) component render 或者null
					// 不match => 渲染children(function) 或者null
					// return match ? React.createElement(component) : null
					// 三元表达式
					return match
						? children
							? typeof children === "function"
								? children(props)
								: children
							: component
							? React.createElement(component, props)
							: render
							? render(props)
							: null
						: typeof children === "function"
						? children(props)
						: null;
				}}
			</RouterContext.Consumer>
		);
	}
}
