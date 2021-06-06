import React, { Component } from "react";
// 官方的
import {
	Link,
	Route,
	useRouteMatch,
	useHistory,
	useLocation,
	useParams,
	withRouter,
	Prompt,
} from "react-router-dom";
// 手写的
// import {
// 	Link,
// 	Route,
// 	withRouter,
// 	useRouteMatch,
// 	useHistory,
// 	useLocation,
// 	useParams,
// 	Prompt,
// } from "../ReactRouterDomMy";

import Cart from "./Cart";

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
// 				<Route path={url + "/detail"} component={Cart} />
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
// 			<Route path={url + "/detail"} component={Cart} />
// 		</div>
// 	);
// }

// // 动态路由--class组件 @withRouter 装饰器 高阶组件 引入官方的/手写的withRouter 取参
// //! 1.class组件ProductPage加了@withRouter【装饰器写法】之后成了高阶组件了，
// //! 2.接收这个组件作为参数，这个组件上没有Router props 加了withRouter后，这个组件就有了Router props，就可以拿到 match，params, url
// // !3.这里是class组件 如果是func组件  装饰器fun名 加()
// @withRouter
// class ProductPage extends Component {
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
// 				<Route path={url + "/detail"} component={Cart} />
// 			</div>
// 		);
// 	}
// }
// export default ProductPage;

// 动态路由--func组件--HOOKS取参
// export default function ProductPage(props) {
// 	console.log("props:{history,location,match}", props); //xiaogang-log

// 	const match = useRouteMatch();
// 	const history = useHistory();
// 	const location = useLocation();
// 	const params = useParams();

// 	const { url } = match;
// 	const { id } = params;
// 	return (
// 		<div>
// 			<h3>ProductPage</h3>
// 			<p>{id}</p>
// 			<Link to={url + "/detail"}>详情页</Link>
// 			<Route path={url + "/detail"} component={Cart} />
// 		</div>
// 	);
// }

export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = { confirm: true };
	}
	render() {
		return (
			<div>
				<h3>ProductPage</h3>
				<button
					onClick={() => {
						this.setState({ confirm: !this.state.confirm });
					}}
				>
					change
				</button>
				<Link to="/">go home</Link>
				<Prompt when={this.state.confirm} message="确定吗？"></Prompt>
			</div>
		);
	}
}
