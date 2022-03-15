import React, { useState } from 'react';

import PeopleList from './PeopleList';
import SearchInput from './SearchInput';

export default function App() {

    const [search_term, setSearchTerm] = useState('');

    return (
        <div className="people-of-interest">

            <h1>People of interest</h1>

            <SearchInput
                search_term={ search_term }
                setSearchTerm={ setSearchTerm }
            />

            <PeopleList
                search_term={ search_term }
            />

        </div>
    )
}