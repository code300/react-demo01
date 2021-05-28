import React, { Component } from "react";

const { RouterContext } = require("./Context");

// import { RouterContext } from "./Context";  //无法引入

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
