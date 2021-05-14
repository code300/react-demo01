import React, { Component } from "react";
// import { createForm } from "rc-form";
import createForm from "./MyRCForm"; //手写createForm
import Input from "../../components/Input/index";

// 校验规则
const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

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
		this.props.form.setFieldsValue({ username: "" });
		this.props.form.setFieldsValue({ password: "" });
		this.props.form.setFieldsValue({ showmsg: false });
	}

	submit = () => {
		const { getFieldsValue, validateFields } = this.props.form;
		// console.log("submit", getFieldsValue()); //xiaogang-log
		validateFields((err, value) => {
			if (err) {
				console.log("校验失败", err);
			} else {
				console.log("校验成功", value);
			}
		});
	};
	render() {
		// console.log("props", this.props); //xiaogang-log
		// 高阶函数getFieldDecorator
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<h3>RCForm</h3>
				{getFieldDecorator("username", { rules: [nameRules] })(
					<Input placeholder="请输入姓名" />
				)}
				{getFieldDecorator("password", { rules: [passwordRules] })(
					<Input placeholder="请输入密码" />
				)}
				<button onClick={this.submit}>提交</button>
			</div>
		);
	}
}

export default RCForm;
