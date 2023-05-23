import React,{useState} from "react";

const Form = ()=>{

    const initialState = {
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    };

    const[formData,setFormData]=useState(initialState);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            alert('Wronge Password');
            return;
        }
        alert('Submit Successfuly');
        setFormData(initialState);
    }
    
    const handleChange = (e)=>{
        console.log('e',e.target);
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    return(
        <div>
            <h1>SignUp Form</h1>
            <form>
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
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;