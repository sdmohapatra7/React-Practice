import React, { useState } from 'react';


let ballWiseResult = [];
const Score = () => {
    // let Initialscore = 0;
    // let Initialwicket = 0;
    const [score, setScore] = useState(0);
    const [wicket, setWicket] = useState(0);
    const[hit,setHit] = useState();
    // const addOne = ()=>{
    //     setScore(score + 1);
    //     // console.log('score',score);
    // }

    const addScore = (num) => {
        // if (wicket < 10) {
            // ballWiseResult.push(num);
            // setScore(score+num);
            // setScore((prevState) => prevState + num);
            // console.log(ballWiseResult);
        // }

        setHit(num);
    }
    const addWicket = () => {
        // if (wicket < 10) {
        //     ballWiseResult.push('W');
        //     setWicket(wicket + 1);
        //     console.log(ballWiseResult);
        // }

        setHit('W');

    }

    const handleSubmit = (e)=>{
        //synthetic Event use in form or button when we input some value
        e.preventDefault();
        ballWiseResult.unshift(hit);
        console.log(ballWiseResult);
    }
    const handleChange =(e)=>{
        setHit(e.target.value);
    }

    
    const ScoreButton = () => (
        <div>
            <button onClick={() => addScore(0)}>0</button>
            <button onClick={() => addScore(1)}>1</button>
            <button onClick={() => addScore(2)}>2</button>
            <button onClick={() => addScore(3)}>3</button>
            <button onClick={() => addScore(4)}>4</button>
            <button onClick={() => addScore(5)}>5</button>
            <button onClick={() => addScore(6)}>6</button>
            <button onClick={addWicket}>Wicket</button>
        </div>
    );
    const Result = () => (
        // <div>
        //     {ballWiseResult.map((res, index) => (
        //         <>
        //             {index % 6 === 0 ? <br /> : null}
        //             <span key={index}>
        //                 {res === 0 ? <strong>.</strong> : res}
        //             </span>&nbsp;&nbsp;&nbsp;
        //         </>
        //     ))}
        // </div>

        <div>
        {ballWiseResult.map((res,index)=>(
            <p key={index}>{res}</p>
        ))}
        </div>
    );

    const Form = ()=>(
        <form onSubmit={handleSubmit}>
            <input value={hit} onChange={handleChange}></input>
            <input></input>
            <button >Submit</button>
        </form>
    )

    return (
        <>
        {console.log('rerender')}
            <h1>SCORE KEEPER</h1>
            <h2>SCORE:{score}/{wicket}</h2>
            <ScoreButton />
            
            <br />
            <Form />
            <hr />
            <Result />
        </>
    )
}

export default Score;