import React from "react";

const Car = ()=>{

    let cars = ['BMW','AUDI','NEXA','HONDA','MARUTI'];

    return(
        <>
        <h2>List Of Cars</h2>
        <ul>
            {/* first argument is iterate over the array and second argument is index No which contain a key property in react to view the list item with index No... The index of an item in a list can be used as a key for that item .A key is used as a reference when deleting or modifying an item in a list.Each Key should be a unique value */}
            {cars.map((car,index)=><li key={index}>{car}</li>)}
        </ul>
        </>
    );
}

export default Car;