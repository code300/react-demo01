import React, { useContext } from "react";
import { ThemeContext } from "./Context";

export default function FunctionComponentPage(props) {
  const ctx = useContext(ThemeContext);
  return (
    <div>
      <h3 className={ctx.themeColor}>FunctionComponentPage</h3>
    </div>
  );
}
