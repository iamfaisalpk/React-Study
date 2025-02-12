// import React, { useState, useRef } from 'react';
// import './timer.css';

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);
//     const intervalRef = useRef(null);
    
//     const startTimer = () => {
//         if (intervalRef.current) return;
//         intervalRef.current = setInterval(() => {
//             setSeconds((prev) => prev + 1);
//         }, 1000);
//     };

//     const stopTimer = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//     };

//     const resetTimer = () => {
//         stopTimer();
//         setSeconds(0);
//     };

//     return (
//         <div className="timer-container">
//             <p className="timer-display">Time: {seconds} seconds</p>
//             <div className="timer-buttons">
//                 <button onClick={startTimer}>Start</button>
//                 <button onClick={stopTimer}>Stop</button>   
//                 <button onClick={resetTimer}>Reset</button>
//             </div>
//         </div>
//     );
// };

// export default Timer;


                    // use ref

    import React,{useRef} from "react";
import { useForm } from "./Useform";

    const Using = ()=>{
        
        const  [value,handleChange]=useForm ({
            name: "name",
            email: "email",
});

    const inputRef = useRef();
    console.log("Parent");

    const accessRef=()=>{
        console.log(inputRef.current);
    }
    
        return(
            <>
            <form action="" autoComplete="off" ref={inputRef}>
                <input type="text"  name="name" value={value.name} onChange={handleChange}/>
                <input type="text" name="email" value={value.email} onChange={handleChange}/>
            </form>
            <button onClick={accessRef}>Ref</button>
            </>
        )
    };

    export default Using;