import React from "react";

const Todos=()=>{
    const Name = "iam";
    
    const getDay = (date) => {
        return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    };
return(
    <>
    <h1 style={{backgroundColor:"brown", color : "white"}}>{Name} Todos({getDay(new Date())})</h1>
    <ul>
        <li>Learn curly bracket</li>
        <li>explore more about JSX in internet</li>
    </ul>
    </>
);

};

export default Todos;

