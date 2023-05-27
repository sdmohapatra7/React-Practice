import React from "react";

// const Car = ()=>{

//     let cars = ['BMW','AUDI','NEXA','HONDA','MARUTI'];

//     return(
//         <>
//         <h2>List Of Cars</h2>
//         <ul>
//             {/* first argument is iterate over the array and second argument is index No which contain a key property in react to view the list item with index No... The index of an item in a list can be used as a key for that item .A key is used as a reference when deleting or modifying an item in a list.Each Key should be a unique value */}
//             {cars.map((car,index)=><li key={index}>{car}</li>)}
//         </ul>
//         </>
//     );
// }

const Car =()=>{
    let cars = [
        {
            name:'Bmw',
            avgSpeed:100,
            img:"https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym13JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:'Audi',
            avgSpeed:140,
            img:"https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym13JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:'Maruti',
            avgSpeed:120,
            img:"https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym13JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
    ]

    return(
        <>
        <h1>Cars</h1>
        <table border={1}>
            <caption>Cars Details</caption>
            <thead>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>AvgSpeed</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car,index)=>
                <tr key={index}>
                    <td><img alt="" width={100} src={car.img}/></td>
                    <td>{car.name}</td>
                    <td>{car.avgSpeed}</td>
                </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

export default Car;