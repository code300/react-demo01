import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// conncet的参数
// mapStateToProps 把store state映射到props上
// mapDispatchToProps 把dispatch 映射到props上
@connect(({ user }) => ({ isLogin: user.isLogin }))
class LoginPage extends Component {
	render() {
		const { isLogin, location, dispatch } = this.props;
		if (isLogin) {
			const { from = "/" } = location.state || {};
			return <Redirect to={from} />;
		}
		return (
			<div>
				<h3>LoginPage</h3>
				<button
					onClick={() => {
						dispatch({ type: "LOGIN_SUCCESS" });
					}}
				>
					登录
				</button>
			</div>
		);
	}
}

export default LoginPage;
