import React, {useState} from "react";
import axios from "axios";

export default function Register() {

    //values in the form
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_comfirmation: "",
    })

    //error messages to be shown above the form
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues((old_values) => {
            return ({...old_values, [e.target.name]: e.target.value});
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post("/register", values);
        console.log(response);
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
                console.log("Validation failed!");
            }
        }

        
    }

    return (

        

        <form action="" method="post" onSubmit={handleSubmit}>

        {
            Object.values(errors).map((field_errors, i) => field_errors.map((error, j) => (
                <div key={`${i}-${j}`} className="error">
                    {error}
                </div>
            )))
        }

            <div className="form-group">
                <label htmlFor="name">Name</label><br />
                <input onChange={handleChange} type="text" id="name" name="name" value={values.name}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label><br />
                <input onChange={handleChange} type="email" id="email" name="email" value={values.email}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label><br />
                <input onChange={handleChange} type="password" id="password" name="password" value={values.password}/>
            </div>

            <div className="form-group">
                <label htmlFor="password_confirmation">Password confirmation</label><br />
                <input onChange={handleChange} type="password" id="password_confirmation" name="password_confirmation" value={values.password_confirmation}/>
            </div>

            <div className="form-group">
                <button>Register</button>
            </div>
        </form>

    );

}