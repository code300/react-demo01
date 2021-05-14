import React, { useState } from "react";
import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";
import SetStateSync from "./pages/SetStateSync";
import SetStateAsync from "./pages/SetStateAsync";

import Home from "./pages/jd/Home";
import User from "./pages/jd/User";

// jd

import BottomNav from "./components/BottomNav";

import IndexPage from "./pages/jd/IndexPage";
import CartPage from "./pages/jd/CartPage";
import OrderPage from "./pages/jd/OrderPage";
import UserPage from "./pages/jd/UserPage";

// Context
import { ContextPage1, ContextPage2, ContextPage3 } from "./pages/Context/ContextPage";

// HOC
import HocPage from "./pages/Hoc/HocPage"

// RCForm
import Form from "./pages/rc-form/Form"
import RCForm from "./pages/rc-form/RCForm"

function App() {
  // const [activeNum, setActiveNum] = useState(0);
  return (
    <div className="App">
      {/* 组件类型--class组件 & function组件 */}
      {/* <ClassComponent />
      <FunctionComponent />

      state数据同步和异步更新
      <SetStateSync />
      <SetStateAsync /> */}
      {/* <Home /> */}
      {/* <User /> */}

      {/* {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderPage />}
      {activeNum === 3 && <UserPage />}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} /> */}

      {/* props & context组件传参 */}
      {/* <ContextPage1 />
      <ContextPage2 />
      <ContextPage3 /> */}

      {/* HOC高阶组件 */}
      {/* <HocPage /> */}

      {/* RCForm */}
      {/* <Form /> */}
      <RCForm />
    </div>
  );
}

export default App;
