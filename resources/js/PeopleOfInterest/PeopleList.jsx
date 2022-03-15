import { useEffect, useState } from "react";
import axios from "axios";

export default function PeopleList({searchTerm, selectedStatus}) {

    const [data, setData] = useState([]);
    
    const loadData = async () => {
        const url = "/api/search?search=" + encodeURIComponent(searchTerm) + "&status=" + encodeURIComponent(selectedStatus);

        // make a fetch request onto that URL
        try {
            const response = await axios.get(url);
            const data = response.data;
            setData(data);
        } catch(error) {
            console.log(error);
        }
        //parse the response at JSON
        // const data = await response.json();
        
        //change the state of this component, using the new data
    }

    useEffect(() => {
        loadData();
    }, [searchTerm, selectedStatus]);
    
    return (
        <div className="people-of-interest__list">
            
            <ul>
                {data.map((person) => (
                    <li key={person.id} className="people-of-interest__person">{person.name}</li>
                ) )}
            </ul>

        </div>
    );
}