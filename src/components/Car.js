import React from "react";

const Car = ()=>{

    let cars = ['BMW','AUDI','NEXA','HONDA','MARUTI'];

    return(
        <>
        <h2>List Of Cars</h2>
        <ul>
            {/* first argument is iterate over the array and second argument is index No which contain a key property in react to view the list item with index No. */}
            {cars.map((car,index)=><li key={index}>{car}</li>)}
        </ul>
        </>
    );
}

export default Car;