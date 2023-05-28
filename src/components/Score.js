import React, { useState } from 'react';
let ballWiseResult = [];
let Initialscore = 0;
let Initialwicket = 0;

const Score = () => {
    const [score, setScore] = useState(Initialscore);
    const [wicket, setWicket] = useState(Initialwicket);
    // const addOne = ()=>{
    //     setScore(score + 1);
    //     // console.log('score',score);
    // }

    const addScore = (num) => {
        if (wicket < 10) {
            ballWiseResult.push(num);
            // setScore(score+num);
            setScore((prevState) => prevState + num);
            console.log(ballWiseResult);
        }
    }
    const addWicket = () => {
        if (wicket < 10) {
            ballWiseResult.push('W');
            setWicket(wicket + 1);
            console.log(ballWiseResult);
        }

    }
    // console.log(ballWiseResult);
    return (
        <>
            <div>
                <h1>SCORE KEEPER</h1>
                <h2>SCORE:{score}/{wicket}</h2>
                <button onClick={() => addScore(0)}>0</button>
                <button onClick={() => addScore(1)}>1</button>
                <button onClick={() => addScore(2)}>2</button>
                <button onClick={() => addScore(3)}>3</button>
                <button onClick={() => addScore(4)}>4</button>
                <button onClick={() => addScore(5)}>5</button>
                <button onClick={() => addScore(6)}>6</button>
                <button onClick={addWicket}>Wicket</button>
            </div>
            <div>
                {ballWiseResult.map((res, index) => (
                    <>
                        {index % 6 === 0 ? <br /> : null}
                        <span key={index}>{res === 0 ? <strong>.</strong> : res}</span>&nbsp;&nbsp;&nbsp;
                    </>
                ))}
            </div>
        </>
    )
}

export default Score;