import React,{useState} from "react";

const Form = ()=>{

    const initialState = {
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    };

    const[formData,setFormData]=useState(initialState);
    const[error,setError] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            setError('Wronge Password');
            return;
        }
        setError('Submit Successfuly');
        setFormData(initialState);
    }

    const handleChange = (e)=>{
        console.log('e',e.target);
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
        setError("");
    }

    return(
        <div>
            <h1>SignUp Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
                </div>
                <div className="form">
                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div className="form">
                    <label htmlFor="password"> Password: </label>
                    <input type="text" id="password" name="password" value={formData.password} onChange={handleChange}></input>
                </div>
                <div className="form">
                    <label htmlFor="confirmPassword"> Confirm Password: </label>
                    <input type="text" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    {error && <div className="error">{error}</div>};
                </div>
            </form>
        </div>
    );
};

export default Form;