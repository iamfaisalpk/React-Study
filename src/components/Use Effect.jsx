// import React, { useState, useEffect } from 'react';

import { useState,useEffect } from "react"

const Example =()=> {
    const [count, setCount] = useState(0);
    
    const resetClick = ()=>{
        setCount(0);
    };
useEffect(() => {
    console.log('Component rendered or count changed:', count);

    
    return () => {
    console.log('Cleanup before the next effect or unmount');
    };
}, [count]); 

return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <button onClick={resetClick}>reset me</button>
    </div>
);
}

export default Example;

// aother method

// import React, {useState,useEffect} from "react";

// const Test = ()=>{
    
//     useEffect(()=>{
//         console.log("re-render aayi kondirikkunnu");
        
//         return()=>{
//             console.log("re-render");
//         }
//     },[]);

//     return(
//         <>
//             <h1>Test Component</h1>
//         </>
//     )
// };

// export default Test;


// cutome hook plus useEffect

// import React,{useState,useEffect} from "react";
// import { useForm } from "./Useform";

// const Input = ()=>{
//     const [value,setChanging]= useForm({
//         name : "your Name",
//         email : "email@gmail.com",
//         password : "!@123password",
//         cpassword : "!@123password"
//     });

//     useEffect(()=>{
//         console.log("Running");
        
//         return()=>{
//             console.log("unMount is ready: okey")
//         }
//     },[value.name]) 

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