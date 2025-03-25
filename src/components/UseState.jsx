// import { useState } from "react";
// import "./UseState.css";

// const Use = ()=> {
//     const [count, setCount] = useState(0); // useState(0) initializes state with 0
    
// return (
//     <>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)} className="Switch">Increment</button>
//     </>
// );  
// };

// export default Use;

            // use State Timer

// import { useState } from "react";

// const Changing = ()=>{
//     const [count,setCount]= useState(0)
//     const [timing,setTiming]= useState(undefined);

//     const startTimer = ()=>{
//         if(!timing){
//             const timingid = setInterval(()=>{
//                 setCount ((prev)=> prev + 1);
//             },1000);
//             setTiming(timingid);
//         };
//     };

//     const stopTimer = () => {
//         if(timing){
//             clearInterval(timing);
//             setTiming(undefined);
//         }
//     };

//     const resetTimer = ()=>{
//         setCount(0);
//         stopTimer(0);
//     };

//     return(
//         <>
//             <h1>your count: {count}</h1>
//             <button onClick={startTimer}>start</button>
//             <button onClick={stopTimer}>stop</button>
//             <button onClick={resetTimer}>restart</button>
//         </>
//     )
// };

// export default Changing;


// // name changing

// import React,{useState} from "react";

// const Header = ()=>{
//     const [name,setName]=useState("njan");

//     const resetName = ()=>{
//         setName("faizy");
//     }
//     const settName = ()=>{
//         setName("njan");
//     }
//     return(
//         <>
//             <h1>Welcome {name}</h1>
//             <button onClick={settName}>Reset</button>
//             <button onClick={resetName}>set</button>
//         </>

//     )
// };

// export default Header;

// input changing and custom hooks

// import React,{useState} from "react";
// import { useForm } from "./Useform";

// const Input = ()=>{
//     const [value,setChanging]= useForm({
//         name : "your Name",
//         email : "email@gmail.com",
//         password : "!@123password",
//         cpassword : "!@123password"
//     })

//     return(
//         <>
//             <input type="text" name="name" value={value.name} onChange={setChanging}/><br /><br />
//             <input type="text" name="email" value={value.email} onChange={setChanging}/><br /><br />
//             <input type="text" name="password" value={value.password} onChange={setChanging}/><br /> <br />
//             <input type="text" name="cpassword" value={value.cpassword} onChange={setChanging}/>
//         </>
//     )
// };

// export default Input;

// import React, { useState } from 'react';

// const Your = () => {
//     const [count,setCount]=useState(0);
//     const [timing,setTiming]= useState(0);

//     const startTimer = ()=>{
//         if(!timing){
//             const timingid = setInterval (()=>{
//                 setCount((prev)=> prev + 1);
//             },1000);
//             setTiming(timingid)
//         };
//     };

//     const stopTimer = ()=>{
//         if (timing){
//             clearInterval(timing);
//             setTiming(0);
//         };
//     };

//     const resetTimer = ()=>{
//         setCount(0)
//         stopTimer(0);
//     };

// return (
//     <>
//         <h1>Your Timer : {count}</h1>
//         <button onClick={startTimer}>Start</button>
//         <button onClick={stopTimer}>Stop</button>
//         <button onClick={resetTimer}>restart</button>
//     </>
// )
// }

// export default Your;


// Timer

import React, { useState } from "react";

const Timer = () => {
const [seconds, setSeconds] = useState(0);
const [timing, setTiming] = useState(null);

const startTimer = () => {
    if (!timing) {
    const timingId = setInterval(() => {
        setSeconds((prev) => prev + 1);
    }, 1000);
    setTiming(timingId);
    }
};

const stopTimer = () => {
    if (timing) {
    clearInterval(timing);
    setTiming(null);
    }
};

const resetTimer = () => {
    setSeconds(0);
    stopTimer();
};

    // Convert seconds into HH:MM:SS format
const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

return (
    <>
    <h1>{formatTime(seconds)}</h1>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    <button onClick={resetTimer}>Reset</button>
    </>
);
};

export default Timer;


