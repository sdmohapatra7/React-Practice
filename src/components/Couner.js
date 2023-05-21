import React, { useState } from 'react';

const Counter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    // const [isEdit, setIsEdit] = useState(false);
    const handleIncrease = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count - 1);
        // for(let i=0;i<10;i++){
        //     setCount(count + 1);
        //     setCount((xyz)=> xyz + 1);
        // }
        setCount((prevState) => prevState + 1);
    }
    const handleDecrease = () => {
        setCount((prevState) => prevState - 1);
    }
    const handleReset = () => {
        setCount(initialCount);
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={handleIncrease}> Increase </button>
            <button onClick={handleDecrease}> Decrease </button>
            <button onClick={handleReset}> Reset </button>
            {count}
        </div>
    );
}
export default Counter;