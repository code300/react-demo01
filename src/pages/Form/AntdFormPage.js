import React, { Component, useEffect } from "react";
import { Form, Button, Input } from "antd";
const FormItem = Form.Item;
const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };
// onFinish, onFinishFailed antd3中需要自己定义成功失败的事件 antd4中直接使用

// class组件表单
export class AntdFormPage extends Component {
	formRef = React.createRef();
	componentDidMount() {
		this.formRef.current.setFieldsValue({ username: "default" });
	}
	onFinish = val => {
		console.log("onFinish", val);
	}; //xiaogang-log;
	onFinishFailed = val => {
		console.log("onFinishFailed", val);
	}; //xiaogang-log;
	render() {
		return (
			<div>
				<h3>AntdFormPage</h3>
				<Form
					ref={this.formRef}
					onFinish={this.onFinish}
					onFinishFailed={this.onFinishFailed}
				>
					<FormItem name="username" label="姓名" rules={[nameRules]}>
						<Input placeholder="username" />
					</FormItem>
					<FormItem name="password" label="密码" rules={[passwordRules]}>
						<Input placeholder="password" />
					</FormItem>
					<FormItem>
						<Button type="primary" size="large" htmlType="submit">
							提交
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}
// export default AntdFormPage;

// function 组件表单
export function AntdFormPage2(props) {
	const [form] = Form.useForm(); //自定义hook
	const onFinish = val => {
		console.log("onFinish", val);
	}; //xiaogang-log
	const onFinishFailed = val => {
		console.log("onFinishFailed", val);
	}; //xiaogang-log;
	useEffect(() => {
		form.setFieldsValue({ username: "default" });
		console.log("form", form); //xiaogang-log
	}, [form]);
	return (
		<div>
			<h3>AntdFormPage</h3>
			<Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<FormItem name="username" label="姓名" rules={[nameRules]}>
					<Input placeholder="username" />
				</FormItem>
				<FormItem name="password" label="密码" rules={[passwordRules]}>
					<Input placeholder="password" />
				</FormItem>
				<FormItem>
					<Button type="primary" size="large" htmlType="submit">
						提交
					</Button>
				</FormItem>
			</Form>
		</div>
	);
}
