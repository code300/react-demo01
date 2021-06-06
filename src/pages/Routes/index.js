import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch } from "../ReactRouterDomMy";
import HomePage from "../ReactRouterDom/HomePage";
import ProductPage from "../ReactRouterDom/ProductPage";
import UserPage from "../ReactRouterDom/UserPage";
import _404Page from "../ReactRouterDom/_404Page";
import LoginPage from "../ReactRouterDom/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Menu from "../../components/Menu";

export const routes = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/user",
		component: UserPage,
		// auth: PrivateRoute
	},
	{
		path: "/product",
		component: ProductPage,
	},
	{
		path: "/login",
		component: LoginPage,
	},
	{
		component: _404Page,
	},
];

export default function Routes(props) {
	return (
		<Router>
			<Link to="/">首页</Link>
			<Link to="/product">商品</Link>
			<Link to="/user">用户中心</Link>
			<Link to="/login">登录</Link>

			{/* <Menu /> */}

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/product" component={ProductPage} />
				{/* <Route path="/user" component={UserPage} /> */}
				<PrivateRoute path="/user" component={UserPage} />
				<Route component={_404Page} />
			</Switch>
		</Router>
	);
}
