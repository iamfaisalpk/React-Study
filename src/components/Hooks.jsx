import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const [timing, setTiming] = useState(undefined);

    const startTimer = () => {
        if (!timing) { 
            const timerId = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
            setTiming(timerId);
        }
    };

    const stopTimer = () => {
        if (timing) {
            clearInterval(timing);
            setTiming(undefined);
        }
    };

    const resetClicked = () => {
        setCount(0);
        stopTimer();
    };

    return (
        <>
            <h1>Your count: {count}</h1>
            <button onClick={() => startTimer()}>Start</button>
            <button onClick={() => stopTimer()}>Stop</button>
            <button onClick={() => resetClicked()}>Reset</button>
        </>
    );
};

export default State;



                /*custom hooks*/

// import { useForm } from "./Useform";

// const State=()=>{
//     const  [value,handleChange]=useForm ({
//         name: "name",
//         email: "email",
//         password: "password",
//         cpassword: "confirm",
//     })
    
//     // console.log(value.name);
//     // console.log(value.email);
//     return (
//         <>
//             <input type="text" name="name" value={value.name} onChange={handleChange}/><br/>
//             <input type="text" name="email" value={value.email} onChange={handleChange}/><br/>
//             <input type="text" name="password" value={value.password} onChange={handleChange}/><br/>
//             <input type="text" name="cpassword" value={value.cpassword} onChange={handleChange}/>
//         </>
//     );
// };

// export default State;

// import React,{useState,useEffect} from "react";
// import Test from "./Use Effect";
// import { useForm } from "./Useform";



// const State = ()=>{
//     const  [value,handleChange]=useForm ({
//                 name: "name",
//                 email: "email",
//     });
//     const [showTest,setshowTest] = useState(true)
//     return (
//         <>
//         {showTest ? <Test/> : null}
        
//         <button onClick={()=>setshowTest(!showTest)}>Toggole</button>
//             <form action="" autoComplete="off">
//                 <input type="text" name="name" value={value.name} onChange={handleChange}/>
//                 <input type="text" name="email" value={value.email} onChange={handleChange}/>
//             </form>
//         </>
//     );



// };

// export default State;

// practice

// import React,{useState,useEffect} from "react";

// const State = ()=>{
    
//     const[count,setCount]=useState(0);

//     useEffect(()=>{
//         const interval = setInterval (()=>{
//             setCount((prevCount)=>prevCount + 1);
//         },1000);

//         return ()=>{
//             console.log("cleanup the function");
//             clearInterval(interval);
//         };
//     },[]);
        
//     return(
//         <>
//             <h1>Timer : {count}</h1>
//         </>
//     )
// };

// export default State;
