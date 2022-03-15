import React, { useState, useEffect } from "react";

export default function StatusFilter({ setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        loadStatuses();
    }, []);

    const loadStatuses = async () => {
        const getData = await fetch("/api/statuses");
        const data = await getData.json();
        setStatuses(data);
    };

    return statuses.map((status) => {
        return (
            <button
                key={status.id}
                className={"status-filter__status"}
                onClick={() => setSelectedStatus(status.id)}
            >
                {status.name}
            </button>
        );
    });
}
