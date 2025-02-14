import { useState } from "react";
import "./Theme.css";

const Theme = ()=>{
    const [darkMode,setDarkMode] = useState(false);

    const toggleTheme =()=>{
        setDarkMode((prev)=> !prev);
    };

    return (
        <div className={darkMode ? "light-theme" : "dark-theme"}>
            <button onClick={}>Switch theme</button>
        </div>
    )
};

export default Theme;
