import React, { Component } from "react";
// import { Link, Route, withRouter } from "react-router-dom";
import { Link, Route, withRouter } from "../ReactRouterDomMy";
import DetailPage from "./DetailPage";

// 动态路由--class组件
// export default class ProductPage extends Component {
// 	render() {
// 		console.log("props:{history,location,match}", this.props); //xiaogang-log
// 		// 动态路由
// 		const { params, url } = this.props.match;
// 		const { id } = params;
// 		return (
// 			<div>
// 				<h3>ProductPage</h3>
// 				<p>{id}</p>
// 				<Link to={url + "/detail"}>详情页</Link>
// 				<Route path={url + "/detail"} component={DetailPage} />
// 			</div>
// 		);
// 	}
// }

// 动态路由--func组件
// export default function ProductPage(props) {
// 	console.log("props:{history,location,match}", props); //xiaogang-log

// 	const { params, url } = props.match;
// 	const { id } = params;
// 	return (
// 		<div>
// 			<h3>ProductPage</h3>
// 			<p>{id}</p>
// 			<Link to={url + "/detail"}>详情页</Link>
// 			<Route path={url + "/detail"} component={DetailPage} />
// 		</div>
// 	);
// }

// 动态路由--class组件 @withRouter 装饰器 高阶组件 引入官方的/手写的withRouter
//! 1.class组件ProductPage加了@withRouter【装饰器写法】之后成了高阶组件了，
//! 2.接收这个组件作为参数，这个组件上没有Router props 加了withRouter后，这个组件就有了Router props，就可以拿到 match，params, url
@withRouter
class ProductPage extends Component {
	render() {
		console.log("props:{history,location,match}", this.props); //xiaogang-log
		// 动态路由
		const { params, url } = this.props.match;
		const { id } = params;
		return (
			<div>
				<h3>ProductPage</h3>
				<p>{id}</p>
				<Link to={url + "/detail"}>详情页</Link>
				<Route path={url + "/detail"} component={DetailPage} />
			</div>
		);
	}
}
export default ProductPage;
