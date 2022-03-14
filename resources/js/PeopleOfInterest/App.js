import React, {useState} from 'react';
import PeopleList from './PeopleList';
import SearchInput from './SearchInput';
 
export default function App() {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="people-of-interest">
            <h1>People of Interest</h1>
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <PeopleList searchTerm={searchTerm} />
        </div>
    )
}