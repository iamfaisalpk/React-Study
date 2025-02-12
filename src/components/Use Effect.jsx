// import React, { useState, useEffect } from 'react';

// function Example() {
//     const [count, setCount] = useState(0);
    
    
// useEffect(() => {
//     console.log('Component rendered or count changed:', count);

    
//     return () => {
//     console.log('Cleanup before the next effect or unmount');
//     };
// }, [count]); 

// return (
//     <div>
//     <p>You clicked {count} times</p>
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
// );
// }

// export default Example;

// aother method

import React, {useState,useEffect} from "react";

const Test = ()=>{
    
    useEffect(()=>{
        console.log("re-render aayi kondirikkunnu");
        
        return()=>{
            console.log("re-render");
        }
    },[]);

    return(
        <>
            <h1>Test Component</h1>
        </>
    )
};

export default Test;