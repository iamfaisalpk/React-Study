import React,{useState} from "react";

const Reve = ()=>{
    const [count,setCount]= useState(0);

    const Plus = ()=>{
        setCount((prev)=> prev + 1)
    };
    const mines = ()=>{
        setCount((prev)=> prev - 1);
    };
    

    return(
        <>
        <h1>yor count {count}</h1>
        <button onClick={Plus}>Click me</button>
        <button onClick={mines}>minsed me</button>
        </>
    )
};

export default Reve;
