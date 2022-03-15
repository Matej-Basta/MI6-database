import React, { useState } from "react";
import PeopleList from "./PeopleList";
import SearchInput from "./SearchInput";
import StatusFilter from "./StatusFilter";

export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState(null);

    return (
        <div className="people-of-interest">
            <h1>People of Interest</h1>
            <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <StatusFilter setSelectedStatus={setSelectedStatus} />
            <PeopleList
                searchTerm={searchTerm}
                selectedStatus={selectedStatus}
            />
        </div>
    );
}
