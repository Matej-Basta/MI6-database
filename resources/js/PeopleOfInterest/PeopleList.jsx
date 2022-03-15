import { useEffect, useState } from "react";

export default function PeopleList({searchTerm, selectedStatus}) {

    const [data, setData] = useState([]);
    
    const loadData = async () => {
        const url = "/api/search?search=" + encodeURIComponent(searchTerm) + "&status=" + encodeURIComponent(selectedStatus);

        // make a fetch request onto that URL
        const response = await fetch(url);

        //parse the response at JSON
        const data = await response.json();

        //change the state of this component, using the new data
        setData(data);
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