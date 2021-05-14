import React, { Component } from "react";

// rc-form原理： 就是高阶组件（就是一个函数，参数是组件，返回一个组件）
// 手写rc-form

export default function CreateForm(Cmp) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {};
		}
		// 表单监听事件
		handChange = e => {
			const { name, value } = e.target;
			this.setState({ [name]: value });
		};
		// 创建表单
		getFieldDecorator = field => InputCmp => {
			return React.cloneElement(InputCmp, {
				name: field,
				value: this.state[field] || "",
				onChange: this.handChange,
			});
		};
		// 修改数据
		setFieldsValue = newStore => {
			this.setState(newStore);
		};
		// 获取数据
		getFieldsValue = () => {
			return this.state;
		};
		getForm = () => {
			return {
				form: {
					getFieldDecorator: this.getFieldDecorator,
					setFieldsValue: this.setFieldsValue,
					getFieldsValue: this.getFieldsValue,
				},
			};
		};

		render() {
			return <Cmp {...this.props} {...this.getForm()} />;
		}
	};
}
