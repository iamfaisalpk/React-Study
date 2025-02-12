// import React, { useRef } from 'react';

// function FocusInput() {
// const focusRef = useRef(null);

// const handleFocus = () => {
//     focusRef.current.focus(); // Focus the input element
// };

// return (
//     <div>
//     <input ref={focusRef} type="text" />
//     <button onClick={handleFocus}>Focus on Input</button>
//     </div>
// );
// }

// export default FocusInput;

import React, {useRef,useState} from "react";
import { CiPlay1,CiPause1 } from "react-icons/ci";
import Song from "../assets/royalty-free-element-hard-rap-beat-231463.mp3";



const Use = ()=>{

    const AudioRef = useRef(null);
    const [playerS,setplayerS] = useState(false);
    
    const Player= ()=>{
        if(playerS === false){
            setplayerS(true);
            AudioRef.current.pause();
        }else {
            setplayerS(false);
            AudioRef.current.play();
        }
        
    }

    return (
        <>
            <audio ref={AudioRef} src={Song} />
            <button onClick={Player}>{playerS ? <CiPlay1/> : <CiPause1/>}</button>
        </>
    )
};

export default Use;