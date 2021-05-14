import React, { Component } from "react";
// import { createForm } from "rc-form";
import createForm from "./MyRCForm"; //手写createForm
import Input from "../../components/Input/index";

// antd3中高阶组件rc-form缺点：局部更新组件,会重新渲染 整个表单所有组件，性能损耗
// antd4解决了该问题
@createForm //手写createForm
// @createForm() //加括号是rc-form的用法
class RCForm extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		username: "",
	// 		password: "",
	// 	};
	// }

	componentDidMount() {
		this.props.form.setFieldsValue({ username: "default" });
	}

	submit = () => {
		const { getFieldsValue } = this.props.form;
		console.log("submit", getFieldsValue()); //xiaogang-log
	};
	render() {
		console.log("props", this.props); //xiaogang-log
		// 高阶函数getFieldDecorator
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<h3>RCForm</h3>
				{getFieldDecorator("username")(<Input placeholder="Username" />)}
				{getFieldDecorator("password")(<Input placeholder="Password" />)}
				<button onClick={this.submit}>提交</button>
			</div>
		);
	}
}

export default RCForm;
