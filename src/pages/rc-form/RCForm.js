import React, { Component } from "react";
import { createForm } from "rc-form";
import Input from "../../components/Input/index";

@createForm()
class RCForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: "",
    //   password: "",
    // };
  }

  componentDidMount() {
    this.props.form.setFieldsValue({ username: "default" });
  }

  submit = () => {
    const { getFieldsValue } = this.props.form;
    console.log("getFieldsValue", getFieldsValue); //xiaogang-log
  };
  render() {
    console.log('props', this.props); //xiaogang-log
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
