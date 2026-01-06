import React, { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
    // Runs every second
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12 || 12;
        
        return `${hours.toString().padStart(2, "0")}:${minutes.toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;};
        
        return (
        <div className="clock-container">
            <h1>Digital Clock</h1>
            <p className="time">{formatTime(time)}</p>
        </div>
        );
}

export default DigitalClock;

