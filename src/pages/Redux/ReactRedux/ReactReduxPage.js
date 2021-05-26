import React, { Component } from "react";
import store from "./store";
import { connect } from "react-redux";

// 高阶组件 装饰器写法修饰了 当前class组件
@connect(
	// mapStateToProps
	({ count }) => ({ count })
)
class ReactReduxPage extends Component {
	// componentDidMount() {
	// 	// subscribe 订阅事件返回的是一个取消订阅事件
	// 	this.unsubscribe = store.subscribe(() => {
	// 		this.forceUpdate();
	// 	});
	// }
	// // 订阅事件存在就取消订阅
	// componentWillUnmount() {
	// 	if (this.unsubscribe) {
	// 		this.unsubscribe();
	// 	}
	// }

	dispatchAdd = () => {
		store.dispatch({ type: "ADD" });
	};

	render() {
		const { count, add, minus } = this.props;
		console.log("this.props", this.props); //xiaogang-log
		return (
			<div>
				<h3>ReactReduxPage</h3>
				<p>{store.getState().count}</p>
				<button onClick={this.dispatchAdd}>增加</button>
			</div>
		);
	}
}
export default ReactReduxPage;
