import React from "react";

const Student = () => {

    const students = [
        {
            name: 'Shakti',
            age: 25,
            marks: 46
        },
        {
            name: 'Akash',
            age: 22,
            marks: 23
        },
        {
            name: 'Raja',
            age: 22,
            marks: 55
        }
    ]

    return (
        <>
            <h1>Student Info :</h1>
            <table border={1}>
                <caption>Students Details</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.marks}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>{students[0].name}</td>
                        <td>{students[0].age}</td>
                        <td>{students[0].marks}</td>
                    </tr>
                    <tr>
                        <td>{students[1].name}</td>
                        <td>{students[1].age}</td>
                        <td>{students[1].marks}</td>
                    </tr>
                    <tr>
                        <td>{students[2].name}</td>
                        <td>{students[2].age}</td>
                        <td>{students[2].marks}</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    );
}

export default Student;