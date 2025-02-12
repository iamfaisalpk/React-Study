import { useState } from "react";
import "./UseState.css";

const Use = ()=> {
    const [count, setCount] = useState(0); // useState(0) initializes state with 0
    
return (
    <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} className="Switch">Increment</button>
    </>
);  
};

export default Use;

