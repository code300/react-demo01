import React, { Component } from "react";
import store from "./Store";

export default class ReduxPage extends Component {
	componentDidMount() {
		// 订阅
		store.subscribe(() => {
			// 强制视图更新
			this.forceUpdate();
		});
	}
	add = () => {
		// 事件派发
		store.dispatch({ type: "ADD", payload: 100 });
	};
	// store.getState 获取store数据
	render() {
		return (
			<div>
				<h3>ReduxPage</h3>
				<div>{store.getState()}</div>
				<button onClick={this.add}>add</button>
			</div>
		);
	}
}
