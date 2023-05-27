import React,{useState} from 'react';

const Score =()=>{

    let Initialscore = 0;
    let Initialwicket =0;
    const[score,setScore] = useState(Initialscore);
    const[wicket,setWicket]= useState(Initialwicket);
    // const addOne = ()=>{
    //     setScore(score + 1);
    //     // console.log('score',score);
    // }
    const addScore = (num)=>{
        if(wicket<10){
            setScore(score+num);
        }
    }
    const addWicket = ()=>{
        if(wicket<10){
            setWicket(wicket+1)
        }
        
    }
    return(
        <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE:{score}/{wicket}</h2>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(5)}>5</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={addWicket}>Wicket</button>
        </>
    )
}

export default Score;