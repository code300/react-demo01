import React, { Component } from "react";

const { RouterContext } = require("./Context");

// import { RouterContext } from "./Context";  //无法引入

// HOC  接收一个组件返回一个新组件  新组件上多了一些props 和 route context参数
const withRouter = WarppedComponent => props => {
	return (
		<RouterContext.Consumer>
			{context => {
				return <WarppedComponent {...props} {...context}></WarppedComponent>;
			}}
		</RouterContext.Consumer>
	);
};

export default withRouter;
