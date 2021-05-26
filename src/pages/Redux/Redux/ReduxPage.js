import React, { Component } from "react";
import store from "./Store";

export default class ReduxPage extends Component {
	componentDidMount() {
		// 订阅
		// subscribe 返回的是一个取消订阅事件
		this.unsubscribe = store.subscribe(() => {
			// 强制视图更新
			this.forceUpdate();
		});
	}

	// 取消订阅
	componentWillUnmount() {
		if (this.unsubscribe) {
			this.unsubscribe();
		}
	}

	add = () => {
		// 事件派发
		store.dispatch({ type: "ADD", payload: 100 });
	};
	// store.getState() 获取store数据
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
