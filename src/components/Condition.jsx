import React from "react";

const List = ({ item, include }) => {
    return <li>{item} 
    {! include && "{incorrect}"}
    </li>;
};

const Package = () => {
    return (
        <section> 
            <h1>Trip Package</h1>
            <ul>
                <List item="Breakfast, Lunch & Dinner" include={true} />
                <List item="Accommodation in 3-star hotel" include={true} />
                <List item="Flight ticket" include={false} />
            </ul>
        </section>
    );
};

export default Package;
