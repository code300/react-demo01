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
import { ContextPage1, ContextPage2 } from "./pages/Context/ContextPage";

function App() {
  // const [activeNum, setActiveNum] = useState(0);
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
      <SetStateSync />
      <SetStateAsync /> */}
      {/* <Home /> */}
      {/* <User /> */}
      {/* {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderPage />}
      {activeNum === 3 && <UserPage />}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} /> */}

      <ContextPage1 />
      <ContextPage2 />
    </div>
  );
}

export default App;
