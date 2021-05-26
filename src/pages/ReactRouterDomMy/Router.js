import React, { Component } from "react";
import { RouterContext } from "./Context";

export default class Router extends Component {
	// 静态函数 计算Route匹配
	static computeRootMatch(pathname) {
		return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
	}

	constructor(props) {
		super(props);
		this.state = {
			location: props.history.location,
		};
		// 监听location变化（监听函数返回一个取消监听函数--保存起来即可）
		// setState 和 forceUpdate 都会让组建强制刷新
		this.unlisten = props.history.listen(location => {
			this.setState({ location });
		});
	}

	componentWillUnmount() {
		// 取消监听--执行取消监听函数
		if (this.unlisten) {
			this.unlisten();
		}
	}

	render() {
		// console.log("props", this.props); //xiaogang-log
		return (
			<RouterContext.Provider
				value={{
					history: this.props.history,
					location: this.props.history.location,
					match: Router.computeRootMatch(this.state.location.pathname),
				}}
			>
				{this.props.children}
			</RouterContext.Provider>
		);
	}
}
