import React, {useState, useEffect} from "react";

export default function StatusFilter({selectedStatus, setSelectedStatus}) {
    
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const response = await fetch("/api/statuses");
        const data = await response.json();

        setStatuses(data);
    }

    useEffect(() => {
        loadStatuses();
    }, [])

    return (
        <div className='status-filter'>
            {statuses.map((status) => (
                <div class={(selectedStatus === status.id) ? "status-filter__status--selected" : null}  key={status.id} onClick={() => {setSelectedStatus(status.id)}}>
                    {status.name}
                </div>
            ))}
        </div>
    );
}