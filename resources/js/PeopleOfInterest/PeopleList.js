import React, { useEffect, useState } from 'react';

export default function PeopleList({ search_term }) {

    const [data, setData] = useState([]);

    const loadData = async () => {
        // prepare the URL
        const url = '/api/request?search=' + encodeURIComponent(search_term);

        // make a fetch request onto that URL
        const response = await fetch(url);

        // parse the response as JSON
        const data = await response.json();

        // change the state of this component, using the new data
        setData(data);
    }

    useEffect(() => {

        loadData();

    }, [search_term]);

    return (
        <div className="people-of-interest__list">

            <ul>

                {
                    data.map(person => (

                        <li key={ person.id } className="people-of-interest__person">
                            { person.name }
                        </li>

                    ))
                }

            </ul>

        </div>
    )

}