import { useState } from 'react'
const task = {
    id: 1,
    text: "My Task",
    completed: true
};
export default function Toggle() {
    const [checked, setChecked] = useState(task.completed);
    const handleChange = () => {
        setChecked(!checked);

    };
    console.log(checked);
    return (
        <>
            <h1>My Daly Golas</h1>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                {task.text}
            </label>
            {/* <button onClick={handleChange}> {checked ? 'Shakti' : 'Palak'}Toggle</button> */}
            <p>{checked ? <span>My name is shakti</span> : <span>My name is palak</span>}</p>
        </>
    )
}
