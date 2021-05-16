import React, { useState, useEffect } from "react";
export default function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
    //   HOOK
  useEffect(() => {
    //   相当于 componentDidMount,componentDidUpdate,componentWillUnmount的集合
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  },[]);
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
