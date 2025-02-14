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