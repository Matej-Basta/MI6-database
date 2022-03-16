import React, {useState} from "react";
import axios from "axios";

export default function MissionEditForm() {

    // const [name, setName] = useState("");
    // const [year, setYear] = useState(null);
    // const [outcome, setOutcome] = useState("");
    
    const [values, setValues] = useState({
        name: "",
        year: new Date().getFullYear(),
        outcome: "planned"
    })

    const handleChange = (event) => {
        setValues(
            previous_values => {
                return (
                    {
                        ...previous_values,
                        [event.target.name]: event.target.value
                    }
                );
            }
        );
    }
    
    
    const years = [];


    for (let year = 1900; year <= new Date().getFullYear() + 10; year++) {
        years.push(year);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const meta_tag = document.querySelector("meta[name='csrf-token']");
        const csrf_value = meta_tag.getAttribute("content");

        //fetch
        const response = await fetch("/api/missions", {
            method: "post", 
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "X-CSRF-TOKEN": csrf_value
            }
        })

        //axios
        const axios_response = await axios.post("/api/missions", values);
    }

    return (
        <>
            <h1>This is the mission form.</h1>
            <form className="edit-mission" action="" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" id="name" value={values.name} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label><br />
                    <select name="year" id="year" value={values.year} onChange={handleChange}>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="outcome">Outcome</label><br />
                    <select name="outcome" id="outcome" value={values.outcome} onChange={handleChange}>
                        <option value="planned">Planned</option>
                        <option value="in-progress">In Progress</option>
                        <option value="success">Success</option>
                        <option value="failure">Failure</option>
                    </select>
                </div>

                <div className="form-group">
                    <button>Save</button>
                </div>
            </form>
        </>
    )
}