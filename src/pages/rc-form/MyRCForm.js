import React, { Component } from "react";

// rc-form原理： 就是高阶组件（就是一个函数[统一定义了参数属性值和方法事件]，参数是组件[纯粹组件无定义参数属性值和方法事件]，返回一个组件(函数中)）
// 手写rc-form 中的 CreateForm

export default function CreateForm(Cmp) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {};
			this.options = {};
		}
		// 表单监听事件
		handChange = e => {
			const { name, value } = e.target;
			this.setState({ [name]: value });
		};
		// 创建表单
		getFieldDecorator = (field, option) => InputCmp => {
			this.options[field] = option;
			return React.cloneElement(InputCmp, {
				name: field,
				value: this.state[field] || "",
				onChange: this.handChange,
				[field]: this.options[field].rules[0].message || "",
				showmsg: false,
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
		// 表单校验
		validateFields = callback => {
			//校验规则 this.options

			// 校验数据 this.state
			let err = [];

			for (let field in this.options) {
				//判断state[field]是否是undefined
				if (!this.state[field]) {
					err.push({
						[field]: this.options[field].rules[0].message,
					});
					this.setState({ showmsg: true });
				}
				//如果是undefined，err.push({[field]:'err'})
			}
			if (err.length === 0) {
				callback(null, this.state);
			} else {
				callback(err, this.state);
			}
		};
		getForm = () => {
			return {
				form: {
					getFieldDecorator: this.getFieldDecorator,
					setFieldsValue: this.setFieldsValue,
					getFieldsValue: this.getFieldsValue,
					validateFields: this.validateFields,
				},
			};
		};

		render() {
			return <Cmp {...this.props} {...this.getForm()} />;
		}
	};
}
