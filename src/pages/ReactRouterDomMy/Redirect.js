import React, { Component } from "react";
import { RouterContext } from "./Context";
import LifeCycle from "./LifeCycle";

export default class Redirect extends Component {
	// ! render是要返回UI的，也就是当前组件的子节点，跳走了就没了children了
	render() {
		return (
			<RouterContext.Consumer>
				{context => {
					const { history, push = false } = context;
					const { to } = this.props;
					return (
						<LifeCycle
							onMount={() => {
								push ? history.push(to) : history.replace(to);
							}}
						/>
					);
				}}
			</RouterContext.Consumer>
		);
	}
}
