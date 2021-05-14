import React, { Component } from "react";
import Layout from "./Layout";

export default class home extends Component {
  state = {};
  render() {
    return (
      <Layout isShowTop={true} isShowBottom={false} title="首页">
        {/* 类似vue的具名插槽 */}
        {/* 对象值--jsx形式 */}
        {{
          content: (
            <div>
              <h3>home</h3>
            </div>
          ),
          // 对象值--字符串形式
          txt: "文本",
          // 对象值--fn事件形式
          btnClick: ()=>{
            console.log('fn')
          }
        }}
      </Layout>
    );
  }
}
