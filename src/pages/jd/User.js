import React, { Component } from "react";
import Layout from "./Layout";

export default class user extends Component {
  state = {};
  render() {
    return (
      <Layout isShowTop={true} isShowBottom={true} title="用户中心">
        <div>
          <h3>user</h3>
        </div>
      </Layout>
    );
  }
}
