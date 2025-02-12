import React from "react";
import { useState } from "react";
const Fetching=()=> {
    const [events, setEvents] = useState([]);
    
    const fetchEvents = () => {
    fetch('https://api.example.com/events')
        .then((response) => response.json())
        .then((data) => setEvents(data));
    };
    
    return (
    <div>
        <button onClick={fetchEvents}>Fetch Events</button>
        <ul>
        {events.map((event) => (
            <li key={event.id}>{event.name}</li>
        ))}
        </ul>
    </div>
    );
};

export default Fetching;
