import React from "react";

export default function Button({label}){
    console.log(Button);
    Event.target.innerText = "saved you";
    
    return <button onClick={()=> alert("your click me")}>{label}</button>
}