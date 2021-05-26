import React from "react";

import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import ProductPage from "./ProductPage";
import _404Page from "./_404Page";
import WelcomePage from "./WelcomePage";

// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	Switch,
// 	useRouteMatch,
// 	useHistory,
// 	useLocation,
// 	useParams,
// 	withRouter,
// 	Prompt,
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Link } from "../ReactRouterDomMy";

export default function RoutePage(props) {
	return (
		<div className="Route">
			<Router>
				<Link to="/">首页</Link>
				<Link to="/user">用户中心</Link>
				<Link to="/login">登录</Link>
				{/* <Link to="/product/123">商品</Link> */}

				{/* exact精确匹配 正则校验  */}
				{/* <Switch> */}
				<Route exact path="/" component={HomePage} />
				<Route path="/user" component={UserPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/product/:id" component={ProductPage} />
				{/* <Route path="/product/:id" component={ProductPage} /> */}
				<Route path="/welcome" component={WelcomePage} />

				{/* 不写path值 默认匹配 */}
				<Route component={_404Page} />
				{/* </Switch> */}
			</Router>
		</div>
	);
}