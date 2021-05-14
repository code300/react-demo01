import React, { useContext } from "react";
import { ThemeContext } from "./Context";

export default function FunctionComponentPage(props) {
  // 子组件接收参数
  // console.log('ThemeContext',ThemeContext); //xiaogang-log
  // HOOKS方法
  const ctx = useContext(ThemeContext);
  // ctx就是context对象
  console.log("ctx", ctx); //xiaogang-log
  return (
    <div>
      <h3 className={ctx.themeColor}>FunctionComponentPage</h3>
    </div>
  );
}
