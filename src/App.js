import React from 'react';
import ClassComponent from './pages/ClassComponent';
import FunctionComponent from './pages/FunctionComponent'
import SetStateSync from './pages/SetStateSync'
import SetStateAsync from './pages/SetStateAsync'

import Home from './pages/jd/Home'
import User from './pages/jd/User'

function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
      <SetStateSync />
      <SetStateAsync /> */}
      <Home />
      {/* <User /> */}
    </div>
  );
}

export default App;
