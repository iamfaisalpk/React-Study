import React from "react";

export default function Todo({ myName, fn }) {
return (
    <>
    <h1 style={{ backgroundColor: "Darkred", color: "white" }}>
        {myName} the best ({fn(new Date)})
    </h1>
    
    <ul>
        <li>Learn about props</li>
        <li>I am the best, most powerful person</li>
    </ul>
    </>
);
}

// const Greeting = (props) => {
//     return <h1>Hello, {props.name}!</h1>;
// };

// const Props = () => {
//     return <Greeting name="Alice" />;
// };

// export default Props;