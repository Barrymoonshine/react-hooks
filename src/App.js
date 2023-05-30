import './App.css';
import React, { useState } from 'react';
import SetColor from './SetColor';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment me!</button>
      <SetColor />
    </div>
  );
};

export default App;
