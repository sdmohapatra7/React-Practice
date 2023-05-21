import React,{useState} from 'react';

import './App.css';

function App() {
  const initialCount = 0;
  const [count,setCount] = useState(initialCount);
  const handleIncrease = ()=>{
    // setCount(count + 1);
    setCount((prevState)=>prevState + 1);
  }
  const handleDecrease = ()=>{
    setCount((prevState)=>prevState - 1);
  }
  const handleReset = ()=>{
    setCount(initialCount);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleIncrease}> Increase </button>
      <button onClick={handleDecrease}> Decrease </button>
      <button onClick={handleReset}> Reset </button>
      {count}
    </div>
  );
}

export default App;
