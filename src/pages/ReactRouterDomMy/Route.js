import React, { Component } from "react";
import { RouterContext } from "./Context";

export default class Route extends Component {
	render() {
		return (
			<RouterContext.Consumer>
				{context => {
					const location = context.location;

					const { path, component } = this.props;
					// window.location 有兼容问题， 所以用react-router-dom里的history库里面的location--从BrowserRouter创建传递过来的
					// const match = window.location.pathname === path;
					// 判断Route中是否传递path值 有则用之 无则用 context传递下来的match
					const match = path ? location.pathname === path : context.match;
					return match ? React.createElement(component) : null;
				}}
			</RouterContext.Consumer>
		);
	}
}
