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

import { useState } from "react";

const Changing = ()=>{
    const [count,setCount]= useState(0)
    const [timing,setTiming]= useState(undefined);

    const startTimer = ()=>{
        if(!timing){
            const timingid = setInterval(()=>{
                setCount ((prev)=> prev + 1);
            },1000);
            setTiming(timingid);
        };
    };

    const stopTimer = () => {
        if(timing){
            clearInterval(timing);
            setTiming(undefined);
        }
    };

    const resetTimer = ()=>{
        setCount(0);
        stopTimer(0);
    };

    return(
        <>
            <h1>your count: {count}</h1>
            <button onClick={startTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>restart</button>
        </>
    )
};

export default Changing;