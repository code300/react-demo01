import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
// import DetailPage from "./DetailPage";

// 动态路由
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

export default class ProductPage extends Component {
	render() {
		return (
			<div>
				<h3>ProductPage</h3>
			</div>
		);
	}
}
