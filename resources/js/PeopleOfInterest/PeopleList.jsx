import { useEffect } from "react";

export default function PeopleList({searchTerm}) {
    
    const loadData = async () => {
        const url = "/api/request?search=" + encodeURIComponent(searchTerm);

        console.log(url);
        // const response = await fetch("/")
    }

    useEffect(() => {
        loadData();
    }, [searchTerm]);
    
    return (
        <div className="people-of-interest__list">
            


        </div>
    );
}